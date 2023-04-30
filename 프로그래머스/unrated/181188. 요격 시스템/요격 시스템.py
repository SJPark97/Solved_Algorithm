def solution(targets):
    targets.sort(key=lambda x: (x[0], x[1]))
    chk = 0
    answer = 0
    for s, e in targets:
        if s >= chk:
            answer += 1
            chk = e
        elif e < chk:
            chk = e
    return answer