from collections import deque


def solution(maps):
    def bfs(x, y):
        visit[x][y] = True
        res = int(maps[x][y])
        queue = deque([(x, y)])
        while queue:
            l_x, l_y = queue.popleft()
            for n in range(4):
                nx, ny = l_x + dx[n], l_y + dy[n]
                if 0 <= nx < len(maps) and 0 <= ny < len(maps[0]):
                    if not visit[nx][ny] and maps[nx][ny] != "X":
                        visit[nx][ny] = True
                        res += int(maps[nx][ny])
                        queue.append((nx, ny))
        return res

    answer = []
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    visit = [[False] * len(maps[0]) for _ in range(len(maps))]
    for i in range(len(maps)):
        for j in range(len(maps[0])):
            if maps[i][j] == "X":
                visit[i][j] = True
            elif not visit[i][j]:
                answer.append(bfs(i, j))
    if len(answer) == 0:
        return [-1]
    answer.sort()
    return answer
