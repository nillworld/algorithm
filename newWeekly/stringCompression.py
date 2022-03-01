import math 
import time 
import datetime 
start = time.time() 
math.factorial(12345) 
end = time.time() 
sec = (end - start) 
result = datetime.timedelta(seconds=sec) 
print(result) 
result_list = str(datetime.timedelta(seconds=sec)).split(".") 
print(result_list[0])

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