using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace datové_struktury
{
    

    class Program
    {   
        
        

        static void Main(string[] args)
        {
            bool kontrola = true;
            Stack<string> posledníHodnota = new Stack<string>();
            Stack<string> stack = new Stack<string>();
            Console.WriteLine("vpište příkaz, až budete chtít přestat napište: stop");
            while (kontrola) { 
                string input = Console.ReadLine();
                string[] separatedInput = input.Split(':');
                if (separatedInput.Length >= 2)
                {
                    string x = separatedInput[0].Trim();
                    string y = separatedInput[1].Trim();

                if (x == "Pridat")
                {
                    Console.WriteLine(y);
                    stack.Push(y);

                }
                else if (input == "stop")
                {
                    kontrola = false;
                }
                
                }
                else if (input == "Zpet")
                {
                    
                    if (stack.Count > 1)
                    {
                        posledníHodnota.Push(stack.Pop());
                        string Minulahodnota = stack.Peek();
                        Console.WriteLine(Minulahodnota);
                    }
                    else Console.WriteLine(stack.Peek());
                }
                else if(input == "Vpred"){
                    if (posledníHodnota.Count > 0) {
                        stack.Push(posledníHodnota.Pop());
                        Console.WriteLine(stack.Peek());
                    }
                    else Console.WriteLine(stack.Peek());

                }
                else Console.WriteLine("neplatný příkaz");
                
                
            }
                
        }
    }
}
