# https://programmers.co.kr/learn/courses/30/lessons/77484?language=python3

def solution(lottos, win_nums):
    # 알고있는 번호를 나타내는 배열
    known_lottos = []
    # 몇개의 숫자를 모르는지 나타내는 변수
    unknown_count = 0
    # 알고있는 번호 중, 맞는 번호 개수를 나타내는 변수
    same_count = 0

    for lotto in lottos:
        if lotto != 0:
            known_lottos.append(lotto)
    unknown_count = len(lottos) - len(known_lottos)

    for know_lotto in known_lottos:
        if know_lotto in win_nums:
            same_count += 1

    # 6등 기준으로 맞는 개수에 따라 등수 올라가고, 모르는 번호 개수를 다 맞는다 할때 최대값
    # (이때 맞는 개수를 빼기만 하면 등수가 하나씩 올라가므로 +1)
    answer = [6 + 1 - same_count - unknown_count, 6 + 1 - same_count]

    # 1개 맞아도 아예 틀려도 6등이므로 이에 대한 예외처리.
    if answer[0] == 7:
        answer[0] = 6
    if answer[1] == 7:
        answer[1] = 6
        
    return answer


lottos = [0, 0, 0, 0, 0, 0]
win_nums = [38, 19, 20, 40, 15, 25]

print(solution(lottos, win_nums))