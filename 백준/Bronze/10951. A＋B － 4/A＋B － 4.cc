#include <iostream>

using namespace std;

int main() {
    // c와의 연결을 끊어 c++의 성능을 늘리는 코드
    ios_base::sync_with_stdio(false);
    
    int A, B;
    while (cin >> A >> B)
    {
        cout << A + B << "\n";
    }
    return 0;
}