#include <iostream>
#include <vector>

using namespace std;

int main() {
    // C와의 연결을 끊어 C++의 성능을 늘리는 코드
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int student_number = 30;
    vector<bool> submit_list(student_number, false);

    int input;
    for (int i = 0; i < student_number - 2; i++)
    {
        cin >> input;
        submit_list[input - 1] = true;
    }
    for (int i = 0; i < student_number; i++)
    {
        if (!submit_list[i])
        {
            cout << i + 1 << "\n";
        }
    }
    return 0;
}