import numpy as np
import array

def solution(arr1, arr2):
  ndarrayAnswer = np.matrix(arr1) * np.matrix(arr2)
  return  ndarrayAnswer.tolist()

def solution2(arr1, arr2):
  answer = [[]]
  print(arr1.size)
  return answer

ex1_arr1 = [[1, 4], [3, 2], [4, 1]]
ex1_arr2 = [[3, 3], [3, 3]]

ex2_arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
ex2_arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]]

# 	[[15, 15], [15, 15], [15, 15]]
print(solution(ex1_arr1, ex1_arr2))
# [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
print(solution(ex2_arr1, ex2_arr2))




# numpy 시간 복잡도
# numpy 없이


# 행렬곱셈 시간복잡도
# https://gomlib.tistory.com/15
# https://seokdev.site/264

# 형렬 곱셈의 관점
# https://bskyvision.com/500