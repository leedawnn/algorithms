# vscode
with open('input.txt', 'r') as file:
  k, n = map(int, file.readline().split())

# boj
k, n = map(int, input().split())

def solution(k, n):
  arr = []

  for i in range(1, k+1):
    if (k % i == 0):
      arr.append(i)
  
  if (len(arr) < n):
    print(0)
  else:
    print(arr[n-1])

solution(k, n)
