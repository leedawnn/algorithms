# 나의 풀이,, 되게 지저분하다 ㅎ 
def solution(answers):
    answer = []
    
    count_one = 0
    count_two = 0
    count_three = 0
    
    one = [1, 2, 3, 4, 5]
    two = [2, 1, 2, 3, 2, 4, 2, 5]
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for i in range(len(answers)):
        if answers[i] == one[i % len(one)]:
            count_one += 1
    
        if answers[i] == two[i % len(two)]:
            count_two += 1
        
        if answers[i] == three[i % len(three)]:
            count_three += 1

    max_count = max(count_one, count_two, count_three)
    
    if count_one == max_count:
        answer.append(1)
    if count_two == max_count:
        answer.append(2)
    if count_three == max_count:
        answer.append(3)
      
    return sorted(answer)

# 다른 사람의 풀이
def solution(answers):
    pattern1 = [1, 2, 3, 4, 5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0, 0, 0]
    result = []

    for idx, answer in enumerate(answers):
      if answer == pattern1[idx % len(pattern1)]:
          score[0] += 1
      if answer == pattern2[idx % len(pattern2)]:
          score[1] += 1
      if answer == pattern3[idx % len(pattern3)]:
          score[2] += 1

    for idx, s in enumerate(score):
        if s == max(score):
            result.append(idx + 1)
    
    print(result)

solution([1, 2, 3, 4, 5])
