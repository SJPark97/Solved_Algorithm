def dfs(number):
    global answer
    if number == n:
        answer += 1
        return
    for i in range(n):
        if not visit[i] and not visit_top[i + number] and not visit_bottom[(n - 1) - i + number]:
            visit[i] = visit_top[i + number] = visit_bottom[(n - 1) - i + number] = True
            dfs(number + 1)
            visit[i] = visit_top[i + number] = visit_bottom[(n - 1) - i + number] = False
            

n = int(input())
visit = [False] * n
visit_top = [False] * (2 * n)
visit_bottom = [False] * (2 * n)
answer = 0
dfs(0)
print(answer)
