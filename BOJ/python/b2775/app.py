# vscode
with open('input.txt', 'r') as file:
    t = int(file.readline().strip())

    for _ in range(t):
        floor = int(file.readline().strip()) # 층
        num = int(file.readline().strip()) # 호
        f0 = [x for x in range(1, num + 1)] # 0층 리스트

        print(f0)

        for k in range(floor): # 층 수만큼 반복
            for i in range(1, num): # 1 ~ n-1까지 (인덱스로 사용)
                f0[i] += f0[i-1] #층별 각 호실의 사람 수를 변경
        
        # print(f0[-1])
              

# boj
# n = int(input())

# for k in range(n):
#     a = int(input())
#     b = int(input())
#     list1 = [i for i in range(1,b+1)]
#     for i in range(a):
#         for j in range(1,b):
#             list1[j]+=list1[j-1]
#     print(list1[-1])
