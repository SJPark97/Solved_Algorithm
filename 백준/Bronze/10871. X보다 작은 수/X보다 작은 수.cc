#include <iostream>

using namespace std;

int main() {
    // c와의 연결을 끊어 c++의 성능을 늘리는 코드
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N, X;
    cin >> N >> X;
    for (int i = 0; i < N; i++)
    {
        int input;
        cin >> input;
        if (X > input)
        {
            cout << input << " ";
        }
    }
    return 0;
}