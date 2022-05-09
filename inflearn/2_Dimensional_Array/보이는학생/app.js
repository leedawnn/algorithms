/* 보이는 학생

선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.) 
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
input = input[1].split(' ').map(Number);

let answer = [input[0]].map(Number);

// 앞에 서 있는 학생보다 크면 보이고, 작거나 같으면 보이지 않는 로직
for (let i = 0; i < input.length; i++) {
  if (Math.max(...answer) < input[i + 1]) {
    answer.push(input[i + 1]);
  }
}

// 중복 체크
answer = [...new Set(answer)];

// 선생님이 볼 수 있는 최대 학생 수
console.log(answer.length);
