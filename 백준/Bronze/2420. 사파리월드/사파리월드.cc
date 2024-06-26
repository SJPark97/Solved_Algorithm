#include <iostream>

using namespace std;

int main() {
    long N, M;
    cin >> N >> M;
    if (N - M > 0) {
        cout << N - M;
    } else {
        cout << M - N;
    }
    return 0;
}