def solution(sequence):
    def chk(number):
        nonlocal max_answer, min_answer, result
        new_answer = number + result
        max_answer = max(max_answer, new_answer)
        min_answer = min(min_answer, new_answer)
        result = new_answer

    max_answer = 0
    min_answer = 0
    num = sequence[0]
    result = 0
    for i in range(len(sequence)):
        if i % 2 == 1:
            sequence[i] *= -1
        if i == 0:
            continue
        if abs(num + sequence[i]) == abs(num) + abs(sequence[i]):
            num += sequence[i]
        else:
            chk(num)
            num = sequence[i]
    chk(num)
    return max_answer - min_answer