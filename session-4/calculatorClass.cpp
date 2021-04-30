#include <iostream>

using namespace std;



class Calculator {
    public:
        void add(double a, double b);
        void subtract(double a, double b);
        void multiply(double a, double b);
        void divide(double a, double b);
        double getResult( void );        
       
    private:        
        double result;
        double calculation(double a, string operation, double b);
    protected:
        double doSomethingSpecial(double a, double b);
};

void Calculator::add(double a, double b){
    Calculator::calculation(a, "add", b);    
}

void Calculator::subtract(double a, double b){
    Calculator::calculation(a, "subtract", b);
}

void Calculator::multiply(double a, double b){
    Calculator::calculation(a, "multiply", b);
}

void Calculator::divide(double a, double b){
    Calculator::calculation(a, "divide", b);
}

double Calculator::doSomethingSpecial(double a, double b){
    return (a*b / (a-b));
}

double Calculator::calculation(double a, string operation, double b){
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

double Calculator::getResult( void ){
    return result;
}


class AdditionalCalculator : public Calculator{
    public:
    double doSomethingElse(double a, double b);
};

double AdditionalCalculator::doSomethingElse(double a, double b){
    return doSomethingSpecial(a,b) + 99;
}


int main()
{
    Calculator *calculator = new Calculator();
    calculator->add(3,4);    
    calculator->subtract(0, 2);
    calculator->multiply(0, 5);
    cout << calculator->getResult() << endl;
    
    
    AdditionalCalculator *additionalCalculator = new AdditionalCalculator();
    cout << additionalCalculator->doSomethingElse(12, 3) << endl;
    
   
}
