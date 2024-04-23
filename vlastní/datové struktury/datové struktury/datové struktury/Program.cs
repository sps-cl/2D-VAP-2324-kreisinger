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
            //pole 
            int[] pole = new int[10];

            for(var i = 0; i < pole.Length; i++)
            {   
                pole[i] = 1;
                if (i == 9)
                {
                    pole[9] += 1;
                }
                Console.WriteLine(pole[i]);
            }
            

            //List
            List<int> list = new List<int>();
            list.Add(1);
            list.Remove(1);
            list.RemoveAll((int i) => i == 1);

            //stack 
            Stack<int> stack = new Stack<int>();
            stack.Push(1);
            int hodnota2 = stack.Peek();
            int hodnota3 = stack.Pop();

            //queue
            Queue<int> queue = new Queue<int>();
            queue.Enqueue(1);
            queue.Enqueue(2);
            queue.Enqueue(3);
            int hodnota4 = queue.Peek();
            int hodnota5 = queue.Dequeue();

            //dictionary 
            Dictionary<string, int> dictionary = new Dictionary<string, int>();
            dictionary.Add("a", 1);
            if (dictionary.ContainsKey("A"))
            {
                int hodnota6 = dictionary["a"];
            }

            //hashSet
            HashSet<int> hashSet = new HashSet<int>();
            hashSet.Add(1);
            hashSet.Add(2);
            hashSet.Add(3);
            hashSet.Add(1);
            
            foreach(int h in hashSet)
            {

            }
            Console.Read();
        }
    }
}
