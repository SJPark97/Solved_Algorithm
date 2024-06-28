#include <iostream>

using namespace std;

int main() {
    // C와의 연결을 끊어 C++의 성능을 늘리는 코드
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    char a;
    cin >> a;
    cout << int(a);

    return 0;
}