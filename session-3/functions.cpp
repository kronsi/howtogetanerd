#include <iostream>

using namespace std;


void myFirstFunction() {
  cout << "I just got executed!\n";
}

int calculateSomething(int a, int b){
    return a + b;
}

int calculateSomethingSpecial(int a, int b){
    int y = a + b;
    if(y > 5){
        y = y * 139;
    }
    else {
        y = y -12;
    }
    return y;
}

int main()
{
    myFirstFunction();
    myFirstFunction();
    myFirstFunction();
    cout << calculateSomething(5,9) << "\n";
    cout << calculateSomethingSpecial(1, 2) << "\n";
    return 0;
}