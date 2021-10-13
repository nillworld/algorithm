# https://www.acmicpc.net/problem/1003

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)











####################################

### Memoization 구현 방법


# factorial_memo = {}

# def factorial(n):
#     if n<2:
#         return 1
#     if n not in factorial_memo:
#         factorial_memo[n] = n * factorial(n-1)
#     return factorial_memo[n]

# n = 5
# print(factorial(n))


### OR


# dic = {1:1, 2:1}

# def fib_memoization(n):
#     if n in dic:
#         return dic[n]
    
#     dic[n] = fib_memoization(n-1) + fib_memoization(n-2)
#     return dic[n]
