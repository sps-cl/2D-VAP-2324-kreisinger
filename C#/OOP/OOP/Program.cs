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
            //vkládání čísel
            Console.WriteLine("Napište reálnou hodnotu prvního čísla ");
            double X1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Napište imaginární hodnotu prvního čísla ");
            double Y1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Napište reálnou hodnotu druhého čísla ");
            double X2 = double.Parse(Console.ReadLine());
            Console.WriteLine("Napište imaginární hodnotu druhého čísla ");
            double Y2 = double.Parse(Console.ReadLine());

            //vytvoření K.Č. pro operace
            ComplexNumber Num1 = new ComplexNumber(X1, Y1);
            ComplexNumber Num2 = new ComplexNumber(X2, Y2);

            //instance třídy ComplexNumber s hodnotami rozdílu a součtu

            ComplexNumber součet = Num1.Add(Num2);
            ComplexNumber rozdíl = Num1.Substract(Num2);
            ComplexNumber součin = Num1.Multiply(Num2);
            ComplexNumber podíl = Num1.Divide(Num2);

            // výpis výsledků v konzoli
            Console.WriteLine("součet Komplexních čísel je:" + součet);
            Console.WriteLine("rozdíl Komplexních čísel je:" + rozdíl);
            Console.WriteLine("součin Komplexních čísel je:" + součin);
            Console.WriteLine("podíl Komplexních čísel je:" + podíl);
            Console.Read();


        }
    }
    //založení třídy ComplexNumber
    class ComplexNumber
    {
        //založení veřejných proměných pro práci s parametry třídy
        public double Real;
        public double Imaginary;
        //konstruktor třídy
        public ComplexNumber(double real, double imaginary)
        {
            Real = real;
            Imaginary = imaginary;
        }
        //veřejná metoda pro vrácení nové instance ComplexNumber, se součtem parametrů z instance this a other
        public ComplexNumber Add(ComplexNumber other)
        {
            return new ComplexNumber(Real + other.Real, Imaginary + other.Imaginary);
        }
        //veřejná metoda pro vrácení nové instance ComplexNumber, s rozdílem parametrů z instance this a other
        public ComplexNumber Substract(ComplexNumber other)
        {
            return new ComplexNumber(Real - other.Real, Imaginary - other.Imaginary);
        }
        //veřejná metoda pro vrácení nové instance ComplexNumber, s součinem parametrů z instance this a other
        public ComplexNumber Multiply(ComplexNumber other)
        {
            return new ComplexNumber(Real * other.Real - Imaginary * other.Imaginary,Imaginary * other.Real + Real * other.Imaginary);
        }
        //veřejná metoda pro vrácení nové instance ComplexNumber, s podílem parametrů z instance this a other
        public ComplexNumber Divide(ComplexNumber other)
        {
            double OROIP = Math.Pow(other.Real, 2 ) + Math.Pow(other.Imaginary, 2);
            double Real2 = (Real * other.Real + Imaginary * other.Imaginary) / OROIP;
            double Imaginary2 = (Imaginary * other.Real - Real * other.Imaginary) / OROIP;
            return new ComplexNumber(Real2,Imaginary2);
        }
        //přměna metody na string
        public override string ToString()
        {
            return Real + "; " + Imaginary;
        }
    }
}
