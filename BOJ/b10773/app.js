const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\r\n') // 아나 이거 윈도우 때매 이렇게 한건데, 백준에서 이렇게 하면 오류남 ㅡㅡ \n으로 쓰자..........
  .map(Number);

function solution(input) {
  let arr = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== 0) {
      arr.push(input[i]);
    } else {
      arr.pop();
    }
  }

  if (arr.length) {
    const answer = arr.reduce((prev, curr) => prev + curr, 0);
    console.log(answer);
  } else {
    console.log(0);
  }
}

solution(input);
