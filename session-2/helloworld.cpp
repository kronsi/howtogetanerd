#include <iostream>

using namespace std;

int main()
{
    bool something = true;

    //learning numbers
    int numberSt = 5;
    int numberNd;
    int numberRd = 9;

    float decimalSt = 3.14;
    double decimalNd = 3.14159265359;
    double decimalRd = 7.8912;

    //additional numbers
    unsigned int numberXy = 9;

    //calculation
    int x = numberSt + numberRd;
    double y = decimalNd + decimalRd;

    //text
    char text[26] = "Geben Sie eine Zahl ein: ";

    //array
    int i[5];/* Array mit 5 int-Elementen */

   /* Wertzuweisungen des Arrays */
   i[0] = 5;
   i[1] = 100;
   i[2] = 66;
   i[3] = 77;
   i[4] = 1500;


    //functions
    printf("%s", text);
    scanf("%d", &numberNd);
    printf("Eingegeben: %d\n", numberNd);
    printf("Addiere Eingabe um 9: %d\n", numberNd + 9);

    //pointer
    int *pointer;
    cout << pointer << "\n";
    pointer = &numberSt;
    printf("Zeiger-Wert b: %d\n", *pointer);


    return 0;
}