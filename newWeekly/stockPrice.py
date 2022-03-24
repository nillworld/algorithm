def solution(prices):
    answer = [0]*len(prices)
    for i in range(len(prices)):
        j = i + 1
        while j < len(prices):
            answer[i] += 1
            if prices[j] >= prices[i]:
                
                j += 1
            else: break
            
    return answer