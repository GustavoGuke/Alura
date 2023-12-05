// See https://aka.ms/new-console-template for more information

string mensagem = "Bem Vindo";
//List<string> bandas = new List<string>{"Poesia acústica", "Morada"};
Dictionary<string, List<int>> bandas = new Dictionary<string, List<int>>();
bandas.Add("Morada", new List<int>{10,});

void ExibirmensagemBoasVindas()
{
    Console.WriteLine(@"
░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗  ░██████╗░█████╗░██╗░░░██╗███╗░░██╗██████╗░
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║  ██╔════╝██╔══██╗██║░░░██║████╗░██║██╔══██╗
╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║  ╚█████╗░██║░░██║██║░░░██║██╔██╗██║██║░░██║
░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║  ░╚═══██╗██║░░██║██║░░░██║██║╚████║██║░░██║
██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║  ██████╔╝╚█████╔╝╚██████╔╝██║░╚███║██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░░╚═════╝░╚═╝░░╚══╝╚═════╝░");
    Console.WriteLine(mensagem);
}

void ExibirOpcoesDoMenu()
{   Console.Clear();
    ExibirmensagemBoasVindas();
    Console.WriteLine("\nDigite 1 para registrar uma banda");
    Console.WriteLine("Digite 2 para mostrar todas as bandas");
    Console.WriteLine("Digite 3 para avaliar uma banda");
    Console.WriteLine("Digite 4 para exibir a média de uma banda");
    Console.WriteLine("Digite 0 para sair");

     Console.Write("Escola uma opção: ");
     string opcaoEscolhida = Console.ReadLine()!;
     int opcao = int.Parse(opcaoEscolhida);

    switch (opcao)
    {
        case 1:
            RegistrarBanda();
            break;
        case 2:
            Exibirbandas();
            break;
        case 3:
            AvaliarBanda();
            break;
        case 4:
            Console.WriteLine("Você escolheu a opção " + opcao);
            break;
        case 0:
            Console.WriteLine("Tchau tchau :)");
            break;
        default:
            Console.WriteLine("Opção inválida");
            break;
    }
}


void RegistrarBanda()
{
    Console.Clear();
    ExibirTituloDaOpcao("Registro de bandas");
    Console.Write("Digite o nome da banda que deseja registrar: ");
    string nomeDaBanda = Console.ReadLine()!;
    bandas.Add(nomeDaBanda, new List<int>());
    Console.WriteLine($"A banda {nomeDaBanda} foi registrada com sucesso!");
    Console.Clear();
    Thread.Sleep(2000);
    ExibirOpcoesDoMenu();
}

void Exibirbandas()
{
    Console.Clear();
    foreach (string nBandas in bandas.Keys){
        Console.WriteLine($"Bandas: {nBandas} Notas: {bandas[nBandas]}");
    }
    Console.WriteLine("Digite qualquer tecla para voltar ao menu:");
    Console.ReadKey();
    Console.Clear();
    ExibirOpcoesDoMenu();
}
void ExibirTituloDaOpcao(string titulo)
{
    int quantidadeDeLetras = titulo.Length;
    string asteriscos = string.Empty.PadLeft(quantidadeDeLetras, '*');
    Console.WriteLine(asteriscos);
    Console.WriteLine(titulo);
    Console.WriteLine(asteriscos + "\n");
}

void AvaliarBanda()
{
    Console.Clear();
    ExibirTituloDaOpcao("Avaliar Banda");
    Console.Write("Digite o nome da Banda: ");
    string existeBanda = Console.ReadLine()!;
    if(bandas.ContainsKey(existeBanda))
    {
        Console.Write("Qual a nota da Banda: ");
        int nota = int.Parse(Console.ReadLine()!);
        bandas[existeBanda].Add(nota);
        Console.WriteLine("A nota foi registrada com sucesso");
        Thread.Sleep(4000);
        Console.Clear();
        ExibirOpcoesDoMenu();
    } else 
    {
        Console.WriteLine("Banda não encontrada");
        Console.WriteLine("Digite qualquer tecla para voltar ao menu:");
        Console.ReadKey();
        ExibirOpcoesDoMenu();
    }
}

ExibirOpcoesDoMenu();

// pegar media
// List<int> notasPythonMaria = notasAlunos["Maria"]["Python"];
// double mediaMariaEmPython = notasPythonMaria.Average();
// Console.WriteLine(mediaMariaEmPython);