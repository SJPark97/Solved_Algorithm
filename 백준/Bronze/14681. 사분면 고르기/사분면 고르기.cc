#include <iostream>

using namespace std;

int main() {
    int x, y, result = 4;
    cin >> x >> y;
    if (x > 0 && y > 0) {
        result = 1;
    } else if (x < 0 && y > 0) {
        result = 2;
    } else if (x < 0 && y < 0) {
        result = 3;
    }
    cout << result;
    return 0;
}