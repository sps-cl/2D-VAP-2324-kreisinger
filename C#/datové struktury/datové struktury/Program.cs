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
            while (kontrola) { 
            Stack<string> stack = new Stack<string>();

                Console.WriteLine("vpište příkaz, až budete chtít přestat napište: stop");
                string input = Console.ReadLine();
                string[] separatedInput = input.Split(':');
                string x = separatedInput[0].Trim();
                string y = separatedInput[1].Trim();
                if (x == "Pridat")
                {
                    stack.Push(y);

                }
                else if (input == "stop")
                {
                    kontrola = false;
                }
                else Console.WriteLine("neplatný příkaz");
                x = null;
                y = null;
                
            }
                
        }
    }
}
