def solution(order):
    answer = 0
    sub_belt = []
    n = 0

    def chk_belt():
        nonlocal answer, n
        while sub_belt:
            if sub_belt[-1] != order[n]:
                break
            else:
                sub_belt.pop()
                answer += 1
                n += 1

    for box in range(1, len(order) + 1):
        chk_belt()
        if box == order[n]:
            answer += 1
            n += 1
            continue
        sub_belt.append(box)
    chk_belt()

    return answer
