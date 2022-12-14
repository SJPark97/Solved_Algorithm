def chk(i, j):
    a = 'WBWBWBWB'
    a_cnt = 0
    b = 'BWBWBWBW'
    b_cnt = 0
    for dx in range(8):
        for dy in range(8):
            if dx % 2 == 0:
                if board[i + dx][j + dy] != a[dy]:
                    a_cnt += 1
                elif board[i + dx][j + dy] != b[dy]:
                    b_cnt += 1
            else:
                if board[i + dx][j + dy] != a[dy]:
                    b_cnt += 1
                elif board[i + dx][j + dy] != b[dy]:
                    a_cnt += 1
    return min(a_cnt, b_cnt)


n, m = map(int, input().split())
board = [input() for _ in range(n)]
answer = 64
for i in range(n - 7):
    for j in range(m - 7):
        answer = min(chk(i, j), answer)
print(answer)
