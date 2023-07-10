def solution(numbers):
    answer = []
    for number in numbers:
        if number % 2 == 0:
            answer.append(number + 1)
        else:
            num = bin(number)[2:]
            for i in range(len(num) - 1, 0, -1):
                if num[i] == "1" and num[i - 1] == "0":
                    num = num[:i - 1] + "10" + num[i + 1:]
                    break
            else:
                num = "10" + num[1:]
            answer.append(int(num, 2))
    return answer