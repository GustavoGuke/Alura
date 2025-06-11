import os 
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

GEMINI_APY_KEY = os.getenv("GEMINI_APY_KEY")
CLIENT = genai.Client(api_key=GEMINI_APY_KEY)
model = "gemini-2.0-flash"

lista_categorias_possiveis = "Eletrônicos Verdes,Moda Sustentável,Produtos de Limpeza Ecológicos,Alimentos Orgânicos"
def categorizador(prompt, lista_categorias_possiveis):
    prompt_sistema = f"""
                Você é um categorizador de produtos.
                Você deve assumir as categorias presentes na lista abaixo.
                # Lista de Categorias Válidas
                {lista_categorias_possiveis.split(",")}
                # Formato da Saída
                Produto: Nome do Produto
                Categoria: apresente a categoria do produto
                # Exemplo de Saída
                Produto: Escova elétrica com recarga solar
                Categoria: Eletrônicos Verdes
            """

    response = CLIENT.models.generate_content(
        model=model, 
        contents=prompt,
        config=types.GenerateContentConfig(
            max_output_tokens=500,
            temperature=0.1,
            system_instruction=prompt_sistema,
            #tools= [{"google_search": {}}]
        )
    )
    return response.text


def main():
    prompt = input("Esperando prompt: ")

    while prompt != "":
        ia_categoriza= categorizador(prompt, lista_categorias_possiveis)
        print(ia_categoriza)
        prompt = input("Esperando prompt: ")

if __name__ == "__main__":
    main()