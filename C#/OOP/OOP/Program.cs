using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOP
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Napište reálnou hodnotu prvního čísla ");
            double X1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Napište imaginární hodnotu prvního čísla ");
            double Y1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Napište reálnou hodnotu druhého čísla ");
            double X2 = double.Parse(Console.ReadLine());
            Console.WriteLine("Napište imaginární hodnotu druhého čísla ");
            double Y2 = double.Parse(Console.ReadLine());

            ComplexNumber Num1 = new ComplexNumber(X1, Y1);
            ComplexNumber Num2 = new ComplexNumber(X2, Y2);

        }
    }
    class ComplexNumber
    {
        public double Real;
        public double Imaginary;

        public ComplexNumber(double real, double imaginary)
        {
            real = Real;
            imaginary = Imaginary;
        }
        public void Add(ComplexNumber other)
        {
            Real += other.Real;
            Imaginary += other.Imaginary;
        }
        public void Substract(ComplexNumber other)
        {
            Real -= other.Real;
            Imaginary -= other.Imaginary;
        }
    }
}
