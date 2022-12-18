a, b, v = map(int, input().split())
if (v - b) % (a - b):
    print((v - b)//(a - b) + 1)
else:
    print((v - b)//(a - b))