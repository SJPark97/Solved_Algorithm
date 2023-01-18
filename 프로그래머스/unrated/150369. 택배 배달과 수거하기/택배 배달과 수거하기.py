def solution(cap, n, deliveries, pickups):
    def chk_long_home(location, li):
        while True:
            if location == -1 or li[location] != 0:
                return location
            location -= 1

    def do_work(location, li, c):
        while True:
            if c >= li[location]:
                c -= li[location]
                li[location] = 0
                location -= 1
                if location == -1:
                    return li
            elif c < li[location]:
                li[location] -= c
                return li

    answer = 0
    location_d = location_p = n - 1
    while True:
        location_d = chk_long_home(location_d, deliveries)
        location_p = chk_long_home(location_p, pickups)
        if location_d == -1 and location_p == -1:
            return answer
        answer += (max(location_d, location_p) + 1) * 2
        if location_d > -1:
            deliveries = do_work(location_d, deliveries, cap)
        if location_p > -1:
            pickups = do_work(location_p, pickups, cap)