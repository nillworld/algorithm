def solution(n):
    x = 0
    answer = 0
    while True:
        x += 1
        if n % x == 1:
            answer = x
            return answer

print(solution(10))