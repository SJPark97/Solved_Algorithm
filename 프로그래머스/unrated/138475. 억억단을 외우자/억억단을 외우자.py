def solution(e, starts):
    res = []
    num = 0
    div = [1] * (e + 1)
    for i in range(2, e + 1):
        for j in range(i, e + 1, i):
            div[j] += 1
    for i in range(e, 0, -1):
        if div[i] >= num:
            num = div[i]
            res.append(i)
    res = res[::-1]
    for i in range(len(starts)):
        num = starts[i]
        for j in range(len(res)):
            if num <= res[j]:
                starts[i] = res[j]
                break
    return starts