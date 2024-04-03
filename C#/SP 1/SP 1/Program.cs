using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SP_1
{
    class Program
    {
        static  int NejdeleVzestupneZasebou(int[] x)
            {   
             int pocet = 1;
             int nejdelsiPocet = 1;
             for (int i = 0; i < x.Length - 1; i++){
                int pa1 = x[i];
                int pa2 = x[i + 1]; 
                if (pa1<pa2){
                    pocet += 1;
                    if(pocet > nejdelsiPocet){
                    nejdelsiPocet = pocet;
                    }
                }else
                {
                    pocet = 1; 
                }
             }
             return nejdelsiPocet;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Zadejte čísla");
            string text = Console.ReadLine();
            text = text.Trim();
            string[] hodnoty = text.Split(',');
            int[] cisla = new int[hodnoty.Length];

            for (int i = 0; i < cisla.Length; i++)
            {
                int.TryParse(hodnoty[i], out cisla[i]);
               

            }

            Console.WriteLine("Nejmenší číslo je:" + cisla.Min());
            Console.WriteLine("Největší číslo je:" + cisla.Max());
            Console.WriteLine("Nejdelší vzestupně postupující interval je:" + NejdeleVzestupneZasebou(cisla));

            Console.Read();
        } 
    }
}
