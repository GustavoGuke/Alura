
// Exercicio 1 **************************************************************
// Random aleatorio = new Random();
// int numeroSecreto = aleatorio.Next(1, 101);
// do
// {
//     Console.Write("Digite um número entre 1 e 100: ");
//     int chute = int.Parse(Console.ReadLine());

//     if (chute == numeroSecreto)
//     {
//         Console.WriteLine("Parabéns! Você acertou o número.");
//         break;
//     }
//     else if (chute < numeroSecreto)
//     {
//         Console.WriteLine("O número é maior.");
//     }
//     else
//     {
//         Console.WriteLine("O número é menor.");
//     }
// } while (true);
// Console.WriteLine("O jogo acabou. Você acertou o número secreto!");

// Exercicio 2 **************************************************************
// Iterar em um array e trazer o resto
// List<int> numeros = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Console.WriteLine("Iteração com for: sobra 0");
// for (int i = 0; i < numeros.Count; i++)
// {
//     if (numeros[i] % 2 == 0)
//     {
//         Console.WriteLine(numeros[i]);
//     }
// }

// Console.WriteLine("\nIteração com ForEach: sobra 1");
// foreach (int num in numeros)
// {
//     if (num % 2 == 1)
//     {
//         Console.WriteLine(num);
//     }
// }