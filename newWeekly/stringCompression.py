#https://programmers.co.kr/learn/courses/30/lessons/60057
def solution(s):
    answer = 0
    return answer
  
def factorial(n): 
  if(n > 1): 
    return n * factorial(n - 1) 
  else: 
    return 1

s1 = "aabbaccc"
s2 = "ababcdcdababcdcd"
s3 = "abcabcdede"
s4 ="abcabcabcabcdededededede"
s5 = "xababcdcdababcdcd"
print(solution(s1))
print(factorial(500))