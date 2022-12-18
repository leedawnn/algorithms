// 값이 최소가 되는 방법으로 모든 + 연산자를 처리하고, 다음으로 - 연산자를 처리하면 됨.

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')[0];

function solution(input) {
  const exp = input.split('-').map((str) =>
    str
      .split('+')
      .map(Number)
      .reduce((cur, acc) => cur + acc, 0),
  );

  // 첫번째 원소에서 나머지를 더한 값을 빼주는 것.
  let answer = exp[0] * 2 - exp.reduce((cur, acc) => cur + acc, 0);
  console.log(answer);
}

solution(input);
