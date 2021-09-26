#  https://programmers.co.kr/learn/courses/30/lessons/17682

import re

def solution(dartResult):
    answer = 0
    resultList = []
    scores = re.findall(r'\d+', dartResult)

    dartResult = dartResult.split(scores[0],1)[1]
    resultList.append(dartResult.split(scores[1],1)[0])
    dartResult = dartResult.split(scores[1],1)[1]
    resultList.append(dartResult.split(scores[2],1)[0])
    resultList.append(dartResult.split(scores[2],1)[1])

    totalScoreList = []
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
                if len(totalScoreList) == 0:
                    totalScoreList.append(pow(int(scores[len(totalScoreList)]),powTemp)*2)
                else:
                    totalScoreList[len(totalScoreList)-1] *= 2
                    totalScoreList.append(pow(int(scores[len(totalScoreList)]),powTemp)*2)
            if result[1] == "#":
                totalScoreList.append(-pow(int(scores[len(totalScoreList)]),powTemp))
        else:
            totalScoreList.append(pow(int(scores[len(totalScoreList)]),powTemp))
    for totalScore in totalScoreList:
        answer += totalScore


    return answer

dartResult = "1D2S#10S"
print(solution(dartResult))