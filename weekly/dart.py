#  https://programmers.co.kr/learn/courses/30/lessons/17682

import re

def solution(dartResult):
    answer = 0
    resultList = []

    # re.findall(pattern, string)은 string에서 pattern에 해당하는 내용들을 찾아서 리스트로 리턴
    # r'\d+'는 1회 이상 반복되는 숫자들에 대한 패턴을 의미
    scores = re.findall(r'\d+', dartResult)

    dartResult = dartResult.split(scores[0],1)[1]
    resultList.append(dartResult.split(scores[1],1)[0])
    dartResult = dartResult.split(scores[1],1)[1]
    resultList.append(dartResult.split(scores[2],1)[0])
    resultList.append(dartResult.split(scores[2],1)[1])

    totalScoreList = []
    for result in resultList:
        powTemp = 0

        # 문자열 S, D, T를 제곱으로 계산하기 위해 임시 powTemp 변수에 저장
        if result[0] == "S":
            powTemp = 1
        if result[0] == "D":
            powTemp = 2
        if result[0] == "T":
            powTemp = 3
        
        # 옵션값이 있는지 확인
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

# "점수|보너스|[옵션]"으로 이루어진 문자열 3세트
dartResult = "1D2S#10S"
print(solution(dartResult))