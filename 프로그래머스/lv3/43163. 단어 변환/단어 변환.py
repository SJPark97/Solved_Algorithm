from collections import deque


def solution(begin, target, words):
    def chk(word1, word2):
        cnt = 0
        for i in range(len(word1)):
            if word1[i] != word2[i]:
                cnt += 1
        if cnt == 1:
            return True
        return False

    if target not in words:
        return 0
    visit = [False] * len(words)
    queue = deque([(0, begin)])
    while queue:
        length, word = queue.popleft()
        if word == target:
            return length
        for i in range(len(words)):
            if visit[i]:
                continue
            if chk(word, words[i]):
                visit[i] = True
                queue.append((length + 1, words[i]))