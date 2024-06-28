#include <iostream>
#include <vector>

using namespace std;

int main() {
    // C와의 연결을 끊어 C++의 성능을 늘리는 코드
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N, M;
    cin >> N >> M;
    vector<vector<int> > A(N, vector<int>(M, 0));
    vector<vector<int> > B(N, vector<int>(M, 0));

    for (int x = 0; x < N; x++)
    {
        for (int y = 0; y < M; y++)
        {
            cin >> A[x][y];
        }
    }
    for (int x = 0; x < N; x++)
        {
            for (int y = 0; y < M; y++)
            {
                cin >> B[x][y];
            }
        }
    for (int x = 0; x < N; x++)
        {
            for (int y = 0; y < M; y++)
            {
                cout << A[x][y] + B[x][y] << " ";
            }
            cout << "\n";
        }
    return 0;
}