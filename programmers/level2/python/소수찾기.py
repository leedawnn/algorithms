# set과 permutation 활용
from itertools import permutations

def solution(numbers):
    prime = set()
    
    # 1. 모든 숫자 조합 만들기
    for i in range(len(numbers)):
        prime |= set(map(int, map(''.join, permutations(list(numbers), i + 1))))
    
    # 2. 소수가 아닌 수 제거
    prime -= set(range(0, 2)) # 0과 1 제거
    lim = int(max(prime) ** 0.5) + 1 # prime의 최댓값에 루트 씌우고, range의 두번째 인자를 사용하기 위해 + 1
    for i in range(2, lim):
        prime -= set(range(i*2, max(prime) + 1, i))
        
    return len(prime)
