import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
CHAVE_API_GEMINI = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=CHAVE_API_GEMINI)
modelo = "gemini-1.5-flash"

lista_cliente = [
    {cliente0: "Calendários ecológicos e produtos de papel reciclado, Mochilas sustentáveis feitas "
    "de materiais reciclados, Lanternas solares recarregáveis, Alimentos orgânicos, como frutas, legumes e grãos, "
    "Carregadores solares para dispositivos móveis"}

    {cliente1: "Lâmpadas LED de baixo consumo de energia, Cremes faciais livres de parabenos "
    "e produtos químicos, Meias de fibra de bambu, Luminárias de LED de baixo consumo de energia"}

    {cliente2: "Painéis solares para instalação em residências, Jeans feitos com materiais reciclados"}
    ]

def carrega(nome_do_arquivo):
  try:
    with open(nome_do_arquivo, "r") as arquivo:
      dados = arquivo.read()
      return dados
  except IOError as e:
    print(f"Erro: {e}") 

prompt_sistema = """
Identifique o perfil de compra para cada cliente a seguir.

O formato de saída deve ser:

cliente - descreva o perfil do cliente em 3 palavras
"""

prompt_usuario = carrega("dados\lista_de_compras_100_clientes.csv")


modelo_flash = genai.GenerativeModel(f"models/{modelo}")
qtd_tokens = modelo_flash.count_tokens(prompt_usuario)

LIMITE_TOKENS = 3000

if qtd_tokens.total_tokens >= LIMITE_TOKENS:
    modelo = "gemini-1.5-pro"
        
print(f"O modelo selecionado foi: {modelo}")


llm = genai.GenerativeModel(
    model.name=modelo,
    system_instruction=prompt_sistema
)


resposta = llm.generate_content(prompt_usuario)
print(f"Resposta: {resposta.text}")