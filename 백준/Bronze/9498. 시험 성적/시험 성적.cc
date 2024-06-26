#include <iostream>

using namespace std;

int main() {
    char result = 'F';
    int a;
    cin >> a;

    if (a >= 90) {
        result = 'A';
    } else if (a >= 80) {
        result = 'B';
    } else if (a >= 70) {
         result = 'C';
     } else if (a >= 60) {
          result = 'D';
      }

    cout << result;

    return 0;
}