#include <iostream>

using namespace std;

int main()
{
    int numberNd;
    
    //text
    char text[26] = "Geben Sie eine Zahl ein: ";
    char neuerText;
    
    //functions
    
    printf("%s", text);
    scanf("%d", &numberNd);
    
    printf("Eingegeben: %d hier hinter kommt nix mehr die Zahl kam davor\n", numberNd);
    printf("Addiere Eingabe um 9: %d\n", numberNd + 9);
    
    return 0;
}