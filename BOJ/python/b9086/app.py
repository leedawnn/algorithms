# BOJ
# import sys

# input = sys.stdin.read().strip().split('\n')

# vscode
with open('input.txt', 'r') as file:
  input = file.read().strip().split('\n')
  
input.pop(0)

def solution(input):
  for el in input:
    print(el[0]+el[-1])

solution(input)

