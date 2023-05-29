def solution(r1, r2):
    answer = 1
    for r in range(1, r2):
        y1 = -(-((r1 ** 2 - r ** 2) ** 0.5) // 1) if r1 > r else 0
        y2 = ((r2 ** 2 - r ** 2) ** 0.5) // 1
        answer += y2 - y1 + 1
    return answer * 4