def solution(queue1, queue2):
    answer = 0
    sum_1 = sum(queue1)
    sum_2 = sum(queue2)
    half = (sum_1 + sum_2) // 2
    start = 0
    end = len(queue1)
    queue = queue1 + queue2 + queue1
    while True:
        if sum_1 == half:
            return answer
        if start == end or end == len(queue):
            return -1
        if sum_1 > half:
            sum_1 -= queue[start]
            start += 1
        elif sum_1 < half:
            sum_1 += queue[end]
            end += 1
        answer += 1