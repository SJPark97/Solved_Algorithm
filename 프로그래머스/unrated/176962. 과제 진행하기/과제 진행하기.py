def solution(plans):
    answer = []
    stack = []
    for i in range(len(plans)):
        plans[i][1] = int(plans[i][1][0:2]) * 60 + int(plans[i][1][3:])
        plans[i][2] = plans[i][1] + int(plans[i][2])
    plans.sort(key=lambda x: x[1])
    for i in range(len(plans)):
        name, start_min, end_min = plans[i]
        if i == 0:
            homework = (name, end_min)
            continue
        if homework[1] <= start_min:
            answer.append(homework[0])
            if homework[1] < start_min:
                left_min = start_min - homework[1]
                while stack:
                    last_name, last_time = stack.pop()
                    left_min -= last_time
                    if left_min < 0:
                        stack.append((last_name, abs(left_min)))
                        break
                    elif left_min >= 0:
                        answer.append(last_name)
            homework = (name, end_min)
        else:
            stack.append((homework[0], homework[1] - start_min))
            homework = (name, end_min)
        if i == len(plans) - 1:
            answer.append(homework[0])
    while stack:
        name, time = stack.pop()
        answer.append(name)
    return answer