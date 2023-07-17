import heapq


def solution(jobs):
    # 요청시각이 빠른 순서대로 정렬하며, 요청시각이 같을 경우에는 소요시간이 적게 걸리는 순서대로 정렬한다.
    tasks = sorted([(x[1], x[0]) for x in jobs],
                   key=lambda x: (x[1], x[0]), reverse=True)
    q = []
    heapq.heappush(q, tasks.pop())
    current_time, total_response_time = 0, 0

    # 큐(대기리스트) 에 남아있는 작업이 있을 때까지 반복문을 실행한다.
    while len(q) > 0:
        dur, arr = heapq.heappop(q)  # dur은 작업 소요시간, arr은 작업 요청시각
        current_time = max(current_time + dur, arr + dur)
        total_response_time += current_time - arr
        while len(tasks) > 0 and tasks[-1][1] <= current_time:
            heapq.heappush(q, tasks.pop())
        if len(tasks) > 0 and len(q) == 0:
            heapq.heappush(q, tasks.pop())
    return total_response_time // len(jobs)