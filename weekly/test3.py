def test(test1 = 0.3, test2 = 0.4, test3 = 0.5):
    return test1 * test2 * test3


# 왜 값이 1.2000000000000002 가 나오지??
print(test(test1= 1, test3 = 3))  