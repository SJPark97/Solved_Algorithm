from heapq import heappop, heappush
from collections import deque


def solution(jobs):
    jobs.sort(key=lambda x: (x[0], x[1]))
    jobs = [(i[1], i[0]) for i in jobs]
    length = len(jobs)
    jobs = deque(jobs)
    queue = []
    heappush(queue, jobs.popleft())
    nowTime = 0
    answer = 0
    while queue:
        workingTime, startTime = heappop(queue)
        nowTime = workingTime + max(nowTime, startTime)
        answer += nowTime - startTime
        while jobs:
            if jobs[0][1] > nowTime:
                break
            heappush(queue, jobs.popleft())
        if jobs and not queue:
            heappush(queue, jobs.popleft())
    return answer // length