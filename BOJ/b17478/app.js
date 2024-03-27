const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const n = +require('fs').readFileSync(filePath).toString();

// TODO: 복습..

// 아 이런 식으로 풀 수 있을 것 같은데...
// const answer = [
//   '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.',
//   '"재귀함수가 뭔가요?"',
//   '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
//   '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
//   '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
//   '라고 답변하였지.',
// ];

// function solution(input) {
//   const line = '----';

//   if (input > 1) {
//     return answer.forEach((el, idx) => {
//       if (idx === 5) {
//         solution(input - 1);
//       }
//     });
//   }
//   console.log(answer);
// }

// solution(input);

// 정답 풀이
// let str = '';

// console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');

// function sol(line, currentNum) {
//   if (n !== currentNum) {
//     str += `${line}"재귀함수가 뭔가요?"
//     ${line}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
//     ${line}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
//     ${line}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
//     `;

//     currentNum++;
//     sol(line + '____', currentNum);
//   } else {
//     str += `${line}"재귀함수가 뭔가요?"
//     ${line}"재귀함수는 자기 자신을 호출하는 함수라네"
//     `;
//   }
//   str += `${line}라고 답변하였지.`;
// }

// sol('', 0, n);
// console.log(str);

// 다른 풀이
function sol(n, cnt) {
  console.log('____'.repeat(cnt) + '"재귀함수가 뭔가요?"');

  if (cnt === n) {
    console.log('____'.repeat(cnt) + '"재귀함수는 자기 자신을 호출하는 함수라네"');
  } else {
    console.log('____'.repeat(cnt) + '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.');
    console.log('____'.repeat(cnt) + '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.');
    console.log(
      '____'.repeat(cnt) + '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
    );
    sol(n, cnt + 1);
  }
  console.log('____'.repeat(cnt) + '라고 답변하였지.');
}

console.log('"어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다."');
sol(n, 0);
