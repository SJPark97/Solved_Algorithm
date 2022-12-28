def solution(order):
    answer = 0
    subcontain = []
    box = 1
    while box <= len(order):
        subcontain.append(box)
        while subcontain and subcontain[-1] == order[answer]:
            answer += 1
            subcontain.pop()
        box += 1

    return answer