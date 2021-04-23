#include <iostream>

using namespace std;

int main()
{
    
    int array[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    int sum = 0;
    int i;
    
    for (i = 0; i < 10; i++) {        
        sum += array[i];//null
    }

    /* sum now contains a[0] + a[1] + ... + a[9]*/
    cout << "Sum of the array is " << sum << "\n";
    
    i = 0;
    while (i < 5) {
        cout << i << "\n";
        i = i+1; //i++
    }
    

    return 0;
}