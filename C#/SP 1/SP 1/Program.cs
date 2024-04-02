using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SP_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Zadejte čísla");
            string text = Console.ReadLine();
            text.Trim();
            string[] hodnoty = text.Split(',');
            int[] cisla = new int[hodnoty.Length];

            for (int i = 0; i < cisla.Length; i++)
            {
                int.TryParse(hodnoty[i], out cisla[i]);
               

            }

            static int NejdeleVzestupneZasebou(int[] x)
            {
                for (int i = 0; i < x.Length; i++)
                {
                    if 
                }
            }




            Console.WriteLine("Nejmenší číslo je:" + cisla.Min());
            Console.WriteLine("Největší číslo je:" + cisla.Max());

            Console.Read();
        }
    }
}
