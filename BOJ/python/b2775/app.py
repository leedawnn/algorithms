with open('input.txt', 'r') as file:
  arr = [int(line.strip()) for line in file]
  arr = arr[1:]

def solution(arr):
  print(arr)

solution(arr)
