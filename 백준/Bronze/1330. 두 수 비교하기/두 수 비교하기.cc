#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    string c;

    if (a > b) {
        c = ">";
    } else if (a < b) {
        c = "<";
    } else {
        c = "==";
    }
    cout << c << endl;

    return 0;
}