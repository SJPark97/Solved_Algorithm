from collections import deque


def solution(maps):
    queue = deque([(1, 0, 0)])
    visit = [[False] * len(maps[0]) for _ in range(len(maps))]
    visit[0][0] = True
    dx = (-1, 1, 0, 0)
    dy = (0, 0, -1, 1)
    while queue:
        d, x, y = queue.popleft()
        if x == len(maps) - 1 and y == len(maps[0]) - 1:
            return d
        for n in range(4):
            nx, ny = x + dx[n], y + dy[n]
            if 0 <= nx < len(maps) and 0 <= ny < len(maps[0]):
                if maps[nx][ny] == 1 and not visit[nx][ny]:
                    visit[nx][ny] = True
                    queue.append((d + 1, nx, ny))
    return -1