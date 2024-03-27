using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace app_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("vložte první číslo pro součet");
            int a = int.Parse(Console.ReadLine());
            Console.WriteLine("vložte operátor");
            string oper = Console.ReadLine();
            Console.WriteLine("vložte druhé číslo pro součet");
            int b = int.Parse(Console.ReadLine());
            if (oper == "+"){
               Console.WriteLine($"výsledek je: {a + b}");
            }else if(oper == "-"){
                Console.WriteLine($"výsledek je: {a - b}");
            }else if(oper == "*"){
                Console.WriteLine($"výsledek je: {a * b}");
            }else if(oper == "*"){
                Console.WriteLine($"výsledek je: {a * b}");
            }                                     
            Console.Read();
        }
    }
}
