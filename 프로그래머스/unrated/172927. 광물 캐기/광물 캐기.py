def solution(picks, minerals):
    answer = 0
    li = []
    last = min(len(minerals), 5 * sum(picks))
    for i in range(0, last, 5):
        res_li = [0, 0, 0]
        for j in range(i, i + 5):
            if j == len(minerals):
                break
            if minerals[j] == "diamond":
                res_li[0] += 1
            elif minerals[j] == "iron":
                res_li[1] += 1
            else:
                res_li[2] += 1
        li.append(res_li)
    li.sort(key=lambda x: (-x[0], -x[1], -x[2]))
    for dia, iron, stone in li:
        if picks[0] > 0:
            answer += dia + iron + stone
            picks[0] -= 1
        elif picks[1] > 0:
            answer += 5 * dia + iron + stone
            picks[1] -= 1
        elif picks[2] > 0:
            answer += 25 * dia + 5 * iron + stone
            picks[2] -= 1
    return answer