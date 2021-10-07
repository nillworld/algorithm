def solution(n, left, right):
    answer = []

######### 방법1 - 시간 초과

    # longArray = []
    # for i in range(n):
    #     longArray.extend([i+1]*(i+1))
    #     longArray.extend([i+1 + j + 1 for j in range(n-i-1)])
    #     print(longArray)
    # answer = longArray[left:right+1]
    # return answer



######### 방법2 - 틀림, 메모리 초과

    startRow = left // n
    startColumn = left % n
    endRow = right // n
    endColumn = right % n
    if startRow > startColumn:
        answer.extend([startRow+1]*(startRow - startColumn))
    
    answer.extend([i+ 1 for i in range(startRow+1,n+1)])
    print(answer)

    for i in range(startRow+1,endRow):
        answer.extend([i+1]*(i+1))
        answer.extend([i+1 + j + 1 for j in range(n-i-1)])
    
    if endRow > endColumn:
        answer.extend([endRow+1]*(endColumn + 1))
    else:
        answer.extend([endRow+1]*(endRow + 1))
        print(answer)
        answer.extend(endColumn-endRow + 1+ i + 1 for i in range(endColumn-endRow))

    return answer

print(solution(3, 4, 5))