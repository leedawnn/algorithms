/* 내가 생각한 방식,, 코드로 풀어내기 까다롭당ㅜ
1. input 차례로 배열에 담기
2. 두개씩 담아서 하나의 배열에 모아놓기
3. 중복 제거 if (원래 순서 === reverse(원래 순서)) return false; filter 써서 true 값만 내보내기 하면 될듯? */

// 강의 풀이인데 depth가 너무 깊다,.... 간지가 나지 않는다..

function solution(test) {
  let answer = 0;
  m = test.length; // 테스트 횟수
  n = test[0].length; // 학생 수

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
