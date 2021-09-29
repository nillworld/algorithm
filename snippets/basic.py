# 1. Reversing a string using slicing

my_string = "ABCDE"
reversed_string = my_string[::-1]

print(reversed_string)

# Output
# EDCBA




# 2. First letter caps

my_string = "my name is chaitanya baweja"

# using the title() function of string class
new_string = my_string.title()
   
print(new_string)
   
# Output
# My Name Is Chaitanya Baweja




# 3. Printing a String or a List n Times (문자나 리스트를 n번 반복)

n = 3 # number of repetitions

my_string = "abcd"
my_list = [1,2,3]

print(my_string*n)
# abcdabcdabcd
  
print(my_list*n)
# [1,2,3,1,2,3,1,2,3]




# 4. List Comprehension (리스트 컴프리헨션)

# Multiplying each element in a list by 2

original_list = [1,2,3,4]

new_list = [2*x for x in original_list]

print(new_list)
# [2,4,6,8]




# 5. Swap Values Between Two Variables (두 변수간의 값 바꾸기)
a = 1
b = 2

a, b = b, a

print(a) # 2
print(b) # 1




# 6. Split a String Into a List of Substrings (문자열을 하위 문자열의 리스트로 나누기)

string_1 = "My name is Chaitanya Baweja"
string_2 = "sample/ string 2"

# default separator ' '
print(string_1.split())
# ['My', 'name', 'is', 'Chaitanya', 'Baweja']

# defining separator as '/'
print(string_2.split('/'))
# ['sample', ' string 2']




# 7. Combining a List of Strings Into a Single String (리스트 스트링을 하나의 스트링으로 결합)

list_of_strings = ['My', 'name', 'is', 'Chaitanya', 'Baweja']

# Using join with the comma separator
print(','.join(list_of_strings))

# Output
# My,name,is,Chaitanya,Baweja




# 8. Finding Unique Elements in a String (문자열에서 고유 요소 찾기 즉 중복제거)

my_string = "aavvccccddddeee"
# converting the string to a set
temp_set = set(my_string)

# stitching set into a string using join
new_string = ''.join(temp_set)

print(new_string)
# vcdae




# 9. Check If a Given String Is a Palindrome or Not (주어진 문자열이 회문:’거꾸로 읽어도 같은 문자’인지 확인)

my_string = "abcba"

if my_string == my_string[::-1]:
  print("palindrome")
else:
  print("not palindrome")

# Output
# palindrome




# 10. Frequency of Elements in a List (리스트에 요소가 얼마나 몇번 나오는지)

# finding frequency of each element in a list
from collections import Counter

my_list = ['a','a','b','b','b','c','d','d','d','d','d']
count = Counter(my_list) # defining a counter object

print(count) # Of all elements
# Counter({'d': 5, 'b': 3, 'a': 2, 'c': 1})

print(count['b']) # of individual element
# 3

print(count.most_common(1)) # most frequent element
# [('d', 5)]




# 11. Find Whether Two Strings are Anagrams (두 문자열이 아나그램인지 아닌지 찾기)

# *아나그램: 문자의 순서를 바꿔 다른 단어나 문장을 만든 것.

from collections import Counter

str_1, str_2, str_3 = "acbde", "abced", "abcda"
cnt_1, cnt_2, cnt_3  = Counter(str_1), Counter(str_2), Counter(str_3)

if cnt_1 == cnt_2:
    print('1 and 2 anagram')
if cnt_1 == cnt_3:
    print('1 and 3 anagram')




# 12. Using the try-except-else Block (try-except-else 블록 사용)

a, b = 1,0

try:
    print(a/b)
    # exception raised when b is 0
except ZeroDivisionError:
    print("division by zero")
else:
    print("no exceptions raised")
finally:
    print("Run this always")




# 13. Using Enumerate to Get Index/Value Pairs (enumerate를 사용하여 인덱스/ Value를 쌍으로 가져오기)

my_list = ['a', 'b', 'c', 'd', 'e']

for index, value in enumerate(my_list):
    print('{0}: {1}'.format(index, value))

# 0: a
# 1: b
# 2: c
# 3: d
# 4: e




# 14. Check the Memory Usage of an Object (개체의 메모리 사용량 확인)

import sys

num = 21

print(sys.getsizeof(num))

# In Python 2, 24
# In Python 3, 28




# 15. Merging Two Dictionaries (두 딕셔너리 병합)

dict_1 = {'apple': 9, 'banana': 6}
dict_2 = {'banana': 4, 'orange': 8}

combined_dict = {**dict_1, **dict_2}

print(combined_dict)
# Output
# {'apple': 9, 'banana': 4, 'orange': 8}




# 16. Time Taken to Execute a Piece of Code (코드를 실행하는데 걸리는 시간)

import time

start_time = time.time()
# Code to check follows
a, b = 1,2
c = a+ b
# Code to check ends
end_time = time.time()
time_taken_in_micro = (end_time- start_time)*(10**6)

print(" Time taken in micro_seconds: {0} ms").format(time_taken_in_micro)




# 17. Flattening a List of Lists (리스트들의 리스트를 Flat하게)

from iteration_utilities import deepflatten

# if you only have one depth nested_list, use this
def flatten(l):
    return [item for sublist in l for item in sublist]

l = [[1,2,3],[3]]
print(flatten(l))
# [1, 2, 3, 3]

# if you don't know how deep the list is nested
l = [[1,2,3],[4,[5],[6,7]],[8,[9,[10]]]]

print(list(deepflatten(l, depth=3)))
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




# 18. Sampling From a List (리스트에서 샘플링)

import random

my_list = ['a', 'b', 'c', 'd', 'e']
num_samples = 2

samples = random.sample(my_list,num_samples)
print(samples)
# [ 'a', 'e'] this will have any 2 random values


## only python3

import secrets                          # imports secure module.
secure_random = secrets.SystemRandom()  # creates a secure random object.

my_list = ['a','b','c','d','e']
num_samples = 2

samples = secure_random.sample(my_list, num_samples)

print(samples)
# [ 'e', 'd'] this will have any 2 random values




# 19. Digitize (숫자를 자릿수 별로 나누기)

num = 123456

# using map
list_of_digits = list(map(int, str(num)))

print(list_of_digits)
# [1, 2, 3, 4, 5, 6]

# using list comprehension
list_of_digits = [int(x) for x in str(num)]

print(list_of_digits)
# [1, 2, 3, 4, 5, 6]



# 20. Check for Uniqueness (고유성 확인)

def unique(l):
    if len(l)==len(set(l)):
        print("All elements are unique")
    else:
        print("List has duplicates")

unique([1,2,3,4])
# All elements are unique

unique([1,1,2,3])
# List has duplicates