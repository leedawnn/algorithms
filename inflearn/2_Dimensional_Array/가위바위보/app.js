/* 가위 바위 보

A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 게임 횟수
let times = Number(input[0]);
// 유저 A, B의 정보
let userA = input[1].split(' ').map(Number);
let userB = input[2].split(' ').map(Number);

let answer = [];

// 가위 바위 보 게임
for (let i = 0; i < times; i++) {
  const scissor = 1;
  const rock = 2;
  const paper = 3;

  if (userA[i] === scissor && userB[i] === rock) {
    answer.push('B');
  } else if (userA[i] === scissor && userB[i] === paper) {
    answer.push('A');
  } else if (userA[i] === rock && userB[i] === paper) {
    answer.push('B');
  } else if (userA[i] === rock && userB[i] === scissor) {
    answer.push('A');
  } else if (userA[i] === paper && userB[i] === scissor) {
    answer.push('B');
  } else if (userA[i] === paper && userB[i] === rock) {
    answer.push('A');
  } else {
    answer.push('D');
  }
}
// 정답 출력
console.log(answer.join('\n'));
