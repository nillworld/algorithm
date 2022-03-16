# https://programmers.co.kr/learn/courses/30/lessons/42577

def solution(phone_book):
    answer = True
    phone_book.sort()
    for i in range(len(phone_book)-1):
        if phone_book[i+1].startswith(phone_book[i]):
            answer = False
    
    return answer
  
  
phone_book_1 = ["119", "97674223", "1195524421"]
phone_book_2 = ["123","456","789"]
phone_book_3 = ["12","123","1235","567","88"]
print(solution(phone_book_1))
print(solution(phone_book_2))
print(solution(phone_book_3))