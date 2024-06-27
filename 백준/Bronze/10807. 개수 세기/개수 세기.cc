#include <iostream>
#include <vector>

using namespace std;

int main() {
    // C와의 연결을 끊어 C++의 성능을 늘리는 코드
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N;
    cin >> N;
    
    vector<int> array(N);

    for (int i = 0; i < N; ++i) {
        cin >> array[i];
    }

    int v;
    cin >> v;

    int count = 0;
    for (int i = 0; i < N; ++i) {
        if (array[i] == v) {
            ++count;
        }
    }

    cout << count << endl;
    return 0;
}