const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const seat = input[1].split('');
  let stack = [];
  let answer = 0;

  for (let i = 0; i < seat.length; i++) {
    if (i === 0) stack.push('*');

    if (seat[i] === 'S' && seat[i + 1] !== undefined) {
      stack.push('S');
      stack.push('*');
    } else if (seat[i] === 'L' && seat[i + 1] !== undefined) {
      stack.push('L');
      stack.push('L');
      stack.push('*');

      i++;
    } else {
      stack.push(seat[i]);
    }

    if (i === seat.length) stack.push('*');
  }

  stack.forEach((el) => {
    if (el === '*') answer++;
  });

  console.log(answer);
}

solution(input);
