def solution(n, m, section):
    answer = 0
    if m == 1:
        answer = len(section)
    else:
        number = -m
        for num in section:
            if num >= number + m:
                answer += 1
                number = num
    return answer