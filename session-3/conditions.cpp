#include <iostream>

using namespace std;

int main()
{
    
    int i = 2;

    //first conditon, if else
    if( i == 2 ){
        cout << "Der Wert von i ist zwei\n";
    }
    else {
        cout << "Der Wert von i ist nicht zwei\n";
    }

    if( i != 2 ){
        cout << "Der Wert von i ist ungleich zwei \n";
    }

    //additional condition, if, else if, else
    if( i >= 2 && i < 5 ){
        cout << "Der Wert von i ist größer zwei\n";
    }
    else if(i >= 5){
        cout << "Der Wert von i ist größer fünf \n";
    }
    else {
        cout << "Der Wert von i ist nicht zwei\n";
    }
    
   //switch & case
   switch (i){
        case 2:
            cout << "Der Wert von i ist zwei\n";
            break;
        case 3:
            cout << "Der Wert von i ist drei\n";
            break;
        case 4:
            cout << "Der Wert von i ist vier\n";
            break;
    
        default:
            cout << "Der Wert von i ist ein anderer\n";
            break;
   }
   
    
    //condtions with two parameters....
    int y = 5;
    if( i == 2 and y == 5 ){
        cout << "Der Wert von i ist zwei und von y ist fünf\n";
    }

    if( i == 2 or y == 5 ){
        cout << "Der Wert von i ist zwei oder von y ist fünf\n";
    }

    
    if( i == 2 && y == 5 ){
        cout << "Der Wert von i ist " << i << " der Wert von y ist " << y << endl;
    }

    if( i == 2 || y == 5 ){
        cout << "Der Wert von i ist zwei oder von y ist fünf\n";
    }
    
    
    return 0;
}