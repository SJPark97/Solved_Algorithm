def solution(record):
    res = []
    nickname = {}
    for msg in record:
        state = msg.split(" ")
        if state[0] == "Enter":
            res.append((state[1], "in"))
            nickname[state[1]] = state[2]
        elif state[0] == "Leave":
            res.append((state[1], "out"))
        elif state[0] == "Change":
            nickname[state[1]] = state[2]
    answer = []
    for result in res:
        if result[1] == "in":
            answer.append(f"{nickname[result[0]]}님이 들어왔습니다.")
        else:
            answer.append(f"{nickname[result[0]]}님이 나갔습니다.")
    return answer