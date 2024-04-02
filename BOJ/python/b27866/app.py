# vscode
with open('input.txt', 'r') as file:
    f = file.readline().strip()  # .strip()은 줄바꿈 문자를 제거합니다.
    s = int(file.readline().strip())  # 숫자로 변환합니다.

    print(f[s-1])
    

# BOJ
import sys

f = sys.stdin.readline().strip()
s = int(sys.stdin.readline().strip())

print(f[s-1])
