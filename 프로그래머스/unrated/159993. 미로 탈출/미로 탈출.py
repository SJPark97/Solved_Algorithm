from collections import deque


def solution(maps):
    def bfs(lever_x, lever_y):
        answer = 0
        cnt = 0
        visit = [[False] * len(maps[0]) for _ in range(len(maps))]
        visit[lever_x][lever_y] = True
        queue = deque([(lever_x, lever_y, 0)])
        while queue:
            l_x, l_y, distance = queue.popleft()
            for n in range(4):
                nx, ny = l_x + dx[n], l_y + dy[n]
                if 0 <= nx < len(maps) and 0 <= ny < len(maps[0]) and not visit[nx][ny]:
                    visit[nx][ny] = True
                    if maps[nx][ny] == "S" or maps[nx][ny] == "E":
                        answer += distance + 1
                        cnt += 1
                        if cnt == 2:
                            return answer
                    if maps[nx][ny] != "X":
                        queue.append((nx, ny, distance + 1))
        return -1

    def find_lever():
        for i in range(len(maps)):
            for j in range(len(maps[0])):
                if maps[i][j] == "L":
                    return i, j

    x, y = find_lever()
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    return bfs(x, y)


print(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]))
