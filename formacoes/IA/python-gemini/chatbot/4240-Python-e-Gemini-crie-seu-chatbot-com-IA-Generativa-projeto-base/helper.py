def carrega(nome_do_arquivo):
    try:
        with open(nome_do_arquivo, "rb") as arquivo:
            dados = arquivo.read()
            return dados
    except IOError as e:
        print(f"Erro no carregamento de arquivo: {e}")