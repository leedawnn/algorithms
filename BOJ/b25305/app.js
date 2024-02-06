const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const k = Number(input[0].trim().split(' ')[1]);
const scores = input[1].trim().split(' ').map(Number);

function solution(k, scores) {
  scores.sort((a, b) => b - a);

  console.log(scores[k - 1]);
}

solution(k, scores);
