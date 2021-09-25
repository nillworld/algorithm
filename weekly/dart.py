#  https://programmers.co.kr/learn/courses/30/lessons/17682

import math

def bonusCheck(str):
    if str == "S":
        return 1
    if str == "D":
        return 2
    if str == "T":
        return 3

# def optionChck(str):
#     if str == "#"

def solution(dartResult):
    answer = 0
    firstPoint = 0
    secoundPoint = 0
    thirdPoint = 0

    # 처음 점수, 보너스, [옵션] 값 잘라내기
    if dartResult[2] == "#" or dartResult[2] == "*":
        # if dartResult[2] == "#":
        print("e")
    else:
        print(dartResult[:2])
    
    # 마지막 점수, 보너스, [옵션] 값 잘라내기
    if dartResult[2] == "#" or dartResult[2] == "*":
        print(dartResult[:3])
    else:
        print(dartResult[:2])

    return answer

def solution2(dartResult):
    answer = 0
    resultList = []
    
    for i in range(len(dartResult)):
        if dartResult[i] == "S" or dartResult[i] == "D" or dartResult[i] == "T":
            if i+1 != len(dartResult) and (dartResult[i+1]== "#" or dartResult[i+1]== "*"):
                


    print("??",test)

    dartResult = dartResult.split("1")[1]
    resultList.append(dartResult.split("2")[0])
    dartResult = dartResult.split("2")[1]
    resultList.append(dartResult.split("3")[0])
    resultList.append(dartResult.split("3")[1])

    scoreList = []
    for result in resultList:
        powTemp = 0

        if result[0] == "S":
            powTemp = 1
        if result[0] == "D":
            powTemp = 2
        if result[0] == "T":
            powTemp = 3
        if len(result) == 2:
            if result[1] == "*":
                if len(scoreList) == 0:
                    scoreList.append(pow(1,powTemp)*2)
                else:
                    scoreList[len(scoreList)-1] *= 2
                    scoreList.append(pow(len(scoreList)+1,powTemp)*2)
            if result[1] == "#":
                scoreList.append(-pow(len(scoreList)+1,powTemp))
        else:
            scoreList.append(pow(len(scoreList)+1,powTemp))
    print(scoreList)
    for score in scoreList:
        answer += score


    return answer

dartResult = "1S#2D*3T#"
print(solution2(dartResult))