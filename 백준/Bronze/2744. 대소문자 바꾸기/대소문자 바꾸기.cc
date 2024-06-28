#include <iostream>

using namespace std;

int main() {
    // C와의 연결을 끊어 C++의 성능을 늘리는 코드
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    string input;
    cin >> input;
    for (int i = 0; i < input.length(); i++)
    {
        if (input[i] >= 97)
        {
            input[i] -= 32;
        }
        else
        {
            input[i] += 32;
        }
    }
    cout << input;
    return 0;
}