def solution(sequence, k):
    answer = [0, 0]
    length = 1000000
    start = 0
    end = 0
    res = sequence[0]
    while True:
        if start == len(sequence):
            break
        if res == k:
            if end - start < length:
                answer[0], answer[1] = start, end
                length = end - start
            res -= sequence[start]
            start += 1
        elif res < k:
            end += 1
            if end == len(sequence):
                break
            res += sequence[end]
        else:
            res -= sequence[start]
            start += 1
    return answer