# 나의 풀이
def solution(arr, query):
    for i in range(len(query)):
        index = query[i]
        
        if (i % 2 == 0):
            arr = arr[:index+1]
        else:
            arr = arr[index:]

    return arr

# TODO: 복습!
# enumerate를 활용한 풀이
def solution(arr, query):
    for k, q in enumerate(query):
        if k % 2 == 0:
            arr = arr[:q + 1]
        else: 
            arr = arr[q:]
    return arr

# 투 포인터 활용
# https://butter-shower.tistory.com/226
