from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage
from my_models import GEMINI_FLASH
from my_keys import GEMINI_API_KEY
from my_helper import encode_image
from langchain.prompts import ChatPromptTemplate, PromptTemplate
# from langchain_community.chat_models import ChatMaritalk
# from my_models import GEMINI_FLASH, MARITACA_SABIA
# from my_keys import GEMINI_API_KEY, MARITACA_API_KEY
# resposta = llm.invoke("Quais canais de Youtube você recomenda para que eu possa saber mais a respeito de smarpthones?")
# print("Maritaca: ", resposta.content)
# llm = ChatMaritalk(
#   api_key=MARITACA_API_KEY,
#   model=MARITACA_SABIA
# )


llm = ChatGoogleGenerativeAI(
  api_key=GEMINI_API_KEY,
  model=GEMINI_FLASH
)

imagem = encode_image("dados\exemplo_grafico.jpg")
pergunta = "Descreva a imagem: "

mensagem = HumanMessage(
  content = [
    {
      "type" : "text", 
      "text" : pergunta
    },
    {
      "type" : "image_url",
      "image_url" : f"data:image/jpeg;base64,{imagem}"
    }
  ]
)

resposta = llm.invoke([mensagem])
print(resposta)