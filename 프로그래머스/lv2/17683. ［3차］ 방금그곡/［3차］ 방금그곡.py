def solution(m, musicinfos):
    answer = '(None)'
    t = 0
    for i in range(len(musicinfos)):
        start, end, name, song = musicinfos[i].split(',')
        time = 60 * (int(end[:2]) - int(start[:2])) + int(end[3:5]) - int(start[3:5])
        if time > t:
            result = ''
            n = 0
            cnt = time
            while cnt > 0:
                result += song[n]
                if song[n] != '#':
                    cnt -= 1
                n = (n + 1) % len(song)
            if song[n] == '#':
                result += '#'
            if m[-1] == '#':
                if m in result:
                    answer = name
                    t = time
            else:
                result = result.replace(m + '#', '.')
                if m in result:
                    answer = name
                    t = time
    return answer