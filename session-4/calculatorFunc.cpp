#include <iostream>

using namespace std;

double result = 0;
double calculation(double a, string operation, double b){
    if( a == 0 ){
        a = result;
    }

    if( operation == "add" ){
        result = a+b;
    }
    else if(operation == "subtract"){
        result = a-b;
    }
    else if(operation == "multiply"){
        result = a*b;
    }
    else if(operation == "divide"){
        result = a/b;
    }
    return result;
}

double add(double a, double b){
    return calculation(a, "add", b);
}

double subtract(double a, double b){
    return calculation(a, "subtract", b);
}

double multiply(double a, double b){
    return calculation(a, "multiply", b);
}

double divide(double a, double b){
    return calculation(a, "divide", b);
}

int rest(int a, int b){
    return a%b;
}

int main()
{
   cout << "add 9.3 + 12.1=" << add(9.3, 12.1) << endl;
   cout << "subtract 21.0 - 93.9=" << subtract(21.0, 93.9) << endl;
   cout << "multiply 93.12, 129.4=" << multiply(93.12, 129.4) << endl;
   cout << "divide 16.9 / 4.5=" << divide(16.9, 4.5) << endl;   
   cout << "rest 10%8=" << rest(10, 8) << endl;

   

   /**
    * special operation:
    * 5 + 3 - 4
    * */
   add(5.0, 3.0);
   result = 99;
   
   cout << "5 + 3 - 4=" << subtract(0, 4) << endl;
}
