def solution(n, t, m, p):
    numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F')
    result = '0'
    num = 1
    while len(result) < m * (t - 1) + p:
        number = num
        res = ''
        while number > 0:
            res += str(numbers[number % n])
            number //= n
        result += res[::-1]
        num += 1
    answer = ''
    for i in range(t):
        answer += result[p - 1 + m * i]
    return answer