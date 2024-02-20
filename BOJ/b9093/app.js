const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

input.shift();

function solution(input) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < input.length; i++) {
    temp.push(input[i].split('').reverse().join('').trim());
  }

  for (let j = 0; j < input.length; j++) {
    answer.push(temp[j].split(' ').reverse());
  }

  let result = answer.map((arr) => arr.join(' ')).join('\n');
  console.log(result);
}

solution(input);
