#include <iostream>

using namespace std;

int main() {
    // c와의 연결을 끊어 c++의 성능을 늘리는 코드
    ios_base::sync_with_stdio(false);


    int N;
    cin >> N;
    long result = 1;
    for (int i = 2; i <= N; ++i) {
        result *= i;
    }
    cout << result;
    return 0;
}