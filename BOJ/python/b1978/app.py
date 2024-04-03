with open('input.txt', 'r') as file:
    n = int(file.readline().strip())
    arr = list(map(int, file.readline().strip().split()))[:n]


# boj
# import sys

# n = int(sys.stdin.readline().strip())
# arr = list(map(int, sys.stdin.readline().strip().split()))[:n]

def solution(arr):
  answer = []

  for item in arr:
      if item < 2:
         continue
      for i in range(2, item):
          if (item % i == 0):
            break
      else:
          answer.append(item)

  print(len(answer)) 


solution(arr)

