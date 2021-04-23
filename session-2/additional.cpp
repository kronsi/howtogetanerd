#include <iostream>

using namespace std;

int main()
{
    bool something = true;
    int numberSt = 5;
    //array
    int i[5];/* Array mit 5 int-Elementen */

    /* Wertzuweisungen des Arrays */
    i[0] = 5;
    i[1] = 100;
    i[2] = 66;
    i[3] = 77;
    i[4] = 1500;
    //printf("%d", i[3]);
    
    //pointer
    int *pointer;
    cout << pointer << "\n";
    pointer = &numberSt;
    printf("Zeiger-Wert b: %d\n", *pointer);


    return 0;
}