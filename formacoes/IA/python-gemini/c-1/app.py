import os 
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

GEMINI_APY_KEY = os.getenv("GEMINI_APY_KEY")
CLIENT = genai.Client(api_key=GEMINI_APY_KEY)
model = "gemini-2.0-flash"


# teste para criar chat
# chat_config = types.GenerateContentConfig(
#     system_instruction="""
#     Você é um mentor de pessoas, um  gestor de pessoas e seu trabalho e fazer empreendedores ganhar dinheiro 
#     fazendo planos e projetos individuais e 
#     sofisticados, você deve agir como o pablo marçal.
#     Você pode fazer buscas no google (google_search) para trazer ideias mais recentes. 
#     """
# )
# chat = CLIENT.chats.create(
#   model=model, 
#   config=chat_config,
#   )
# prompt = input("Esperando prompt: ")
# while prompt != "sair":
#   res = chat.send_message(prompt)
#   print(res.text)
#   print("/n /n")
#   prompt = input("Esperando prompt: ")
# PROMPT
# """"COMO EU POSSO GANHAR DINHEIRO COM A IA GERANDO VIDEOS, A A MICROSOFT 
#     DEU ACESSO AO SORA DA OPENAI ATRAVÉS DO BING NO APP MOBILE FAÇA ESTA PESQUISA NO GOOGLE E ENCONTRE ESTA NOTICIA, PODEMOS CRIAR 10 VIDEOS DE 5 SEGUNDOS E QUANDO ACABAR PODEMOS USAR 
#     USANDO 100 PONTOS DO PROGRAMA REWARDS, GOSTARIA DE GANHAR DINHEIRO COM ISSO COMO EU POSSO 
#     MONETIZAR ESSES VIDEOS NO YOUTUBE?"""

prompt = input("Esperando prompt: ")
response = CLIENT.models.generate_content(
    model="gemini-2.0-flash", 
    contents=prompt,
    #config={"tools": [{"google_search": {}}]},
    config=types.GenerateContentConfig(
        max_output_tokens=500,
        temperature=0.1,
        #tools= [{"google_search": {}}]
    )
)
print(response.text)