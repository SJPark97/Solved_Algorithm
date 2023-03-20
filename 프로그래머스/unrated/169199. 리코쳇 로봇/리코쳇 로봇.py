from collections import deque


def solution(board):
    def find():
        for i in range(l):
            for j in range(w):
                if board[i][j] == "R":
                    return i, j

    def bfs():
        dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]
        sx, sy = find()
        queue = deque([(0, sx, sy)])
        visit = {(sx, sy)}
        while queue:
            length, x, y = queue.popleft()
            if board[x][y] == "G":
                return length
            for d in range(4):
                nx, ny = x, y
                while True:
                    if 0 <= nx + dx[d] < l and 0 <= ny + dy[d] < w and board[nx + dx[d]][ny + dy[d]] != "D":
                        nx, ny = nx + dx[d], ny + dy[d]
                    else:
                        if (nx, ny) not in visit:
                            visit.add((nx, ny))
                            queue.append((length + 1, nx, ny))
                        break
        return -1

    w, l = len(board[0]), len(board)
    return bfs()