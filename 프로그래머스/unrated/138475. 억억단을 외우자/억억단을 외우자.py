def solution(e, starts):
    res = []
    num = 0
    divisor = [0 for i in range(e + 1)]
    for i in range(2, e + 1):
        for j in range(1, min(e // i + 1, i)):
            divisor[i * j] += 2
    for i in range(1, int(e ** (1 / 2)) + 1):
        divisor[i ** 2] += 1
    for i in range(e, 0, -1):
        if divisor[i] >= num:
            num = divisor[i]
            res.append(i)
    res = res[::-1]
    for i in range(len(starts)):
        num = starts[i]
        for j in range(len(res)):
            if num <= res[j]:
                starts[i] = res[j]
                break
    return starts