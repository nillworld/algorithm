# https://programmers.co.kr/learn/courses/30/lessons/17686

import re

def solution(files):
    # answer 초기화
    answer = [""] * len(files)
    # file이름이 HEADER와 NUMBER 그리고 TAIL로 이루워진 배열로 나타내기 위한 이차원 배열 filesList 초기화
    filesList = [[" "]*3 for _ in range(len(files))]

    for file in files:
        # file 이름에서 숫자만 추출해서 배열로 담음
        numbers = re.findall(r'\d+', file)
        print(numbers)
        # 숫자 하나하나 배열로 담을때는 '+' 없이
        # numbers = re.findall(r'\d', file)

        # 뽑은 숫자 배열에서 NUMBER부분만
        number = numbers[0]

        index = files.index(file)
        # HEADER
        filesList[index][0] = file.split(number, 1)[0]
        # NUMBER
        filesList[index][1] = number
        # TAIL
        filesList[index][2] = file.split(number, 1)[1]

    print(filesList)
    
    # HEADER에서 대문자도 소문자로 변경해서 sort 그리고 NUMBER를 int로 바꾸어서 sort
    filesList.sort(key=lambda x:(str.lower(x[0]), int(x[1])))

    # sort된 2차원 배열을 1차원 배열로 answer에 담음
    for fileList in filesList:
        answer[filesList.index(fileList)] = ''.join(fileList)

    return answer





temp = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
temp2 = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
temp3 = ["img12.zip", "img10.4zip", "img02.2zip", "img1.zip", "IMG01.5zip", "img2.zip"]
print(solution(temp))

  # 리스트를 컴프리헨션으로 정의할 때
    # filesDic = { filesList.index(fileList):fileList for fileList in filesList}
