from flask import Flask,render_template, request, Response
import google.generativeai as genai
from dotenv import load_dotenv
import os
from time import sleep
from helper import carrega
from persona import personas, selecionar_persona
from gerenciar_historico import remover_mensagens_mais_antigas
from resumo_historico import resumir_historico
import uuid
from gerenciar_imagem import gerar_imagem_gemini
load_dotenv()


CHAVE_API_GOOGLE = os.getenv("CHAVE_API_GOOGLE")
MODELO_ESCOLHIDO = "gemini-1.5-flash"   
genai.configure(api_key=CHAVE_API_GOOGLE)

app = Flask(__name__)
app.secret_key = 'alura'

contexto = carrega("contexto.txt")
caminho_imagem_enviada = None
UPLOAD_FOLDER = "imagens_temporarias"

# Função para criar o chatbot com configuração de contexto e personalidade
def criar_chatbot():
    personalidade = "neutro"

    prompt_do_sistema = f"""
    # PERSONA

    Você é um chatbot de atendimento a clientes de um e-commerce. 
    Você não deve responder perguntas que não sejam dados do ecommerce informado!

    Você deve utilizar apenas dados que estejam dentro do 'contexto'

    # CONTEXTO
    {contexto}

    # PERSONALIDADE
    {personalidade}

    # Histórico
    Acesse sempre o histórico de mensagens, e recupere informações ditas anteriormente.
    """

    configuracao_modelo = {
        "temperature": 0.1,  # Define uma baixa variação nas respostas para consistência
        "max_output_tokens": 8192  # Garante respostas detalhadas e completas
    }

    llm = genai.GenerativeModel(
        model_name=MODELO_ESCOLHIDO,
        system_instruction=prompt_do_sistema,
        generation_config=configuracao_modelo
    )

    # Inicializando o chatbot com histórico vazio
    chatbot = llm.start_chat(history=[])

    return chatbot

# Criando a instância do chatbot
chatbot = criar_chatbot()

def bot(prompt):
    maximo_tentativas = 1
    repeticao = 0
    global caminho_imagem_enviada

    while True:
        try:
            personalidade = personas[selecionar_persona(prompt)]
            mensagem_usuario = f"""
            Considere esta personalidade para responder a mensagem:
            {personalidade}
        
            Responda a seguinte mensagem, sempre lembrando do histórico:
            {prompt}
            """
            resposta = chatbot.send_message(mensagem_usuario)
            chatbot.history.append({'role': 'user', 'parts': [prompt]})
            #print(f"Quantidade: {len(chatbot.history)}\n{chatbot.history}")

            
            # imagem no contexto
            if caminho_imagem_enviada:
                mensagem_usuario += "\n Utilize as caracteristicas da imagem em sua resposta"
                arquivo_imagem = gerar_imagem_gemini(caminho_imagem_enviada)
                resposta = chatbot.send_message([arquivo_imagem, mensagem_usuario])
                os.remove(caminho_imagem_enviada)
                caminho_imagem_enviada = None
            else:
                resposta = chatbot.send_message(mensagem_usuario)



            if len(chatbot.history) > 4:
                chatbot.history = remover_mensagens_mais_antigas(chatbot.history)

            # if len(chatbot.history) > 2: resumo não funcionou 
            #     chatbot.history = resumir_historico(chatbot.history)
            # chatbot.history.append({'role': 'model', 'parts': [resposta.text]})
            return resposta.text
        except Exception as erro:
            repeticao += 1
            if repeticao >= maximo_tentativas:
                return "Erro no Gemini: %s" % erro
            
            if caminho_imagem_enviada:
                os.remove(caminho_imagem_enviada)
                caminho_imagem_enviada = None
            
            sleep(50)



@app.route("/upload_imagem", methods=["POST"])
def upload_imagem():
    global caminho_imagem_enviada

    if "imagem" in request.files:
        imagem_enviada = request.files["imagem"]
        nome_arquivo = str(uuid.uuid4()) + os.path.splitext(imagem_enviada.filename)[1]
        caminho_arquivo = os.path.join(UPLOAD_FOLDER, nome_arquivo)
        imagem_enviada.save(caminho_arquivo)
        caminho_imagem_enviada = caminho_arquivo
        return "Imagem enviada com sucesso", 200
    return "Nenhum arquivo enviado", 400



@app.route("/chat", methods=["POST"])
def chat():
    prompt = request.json["msg"]
    resposta = bot(prompt)
    return resposta

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug = True)
