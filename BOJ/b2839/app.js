const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const x = +input[0];

// greedy
function solution(x) {
  let answer = 0;

  while (x > 0) {
    if (x % 5 === 0) {
      x -= 5;
    } else {
      x -= 3;
    }
    answer += 1;
  }

  return x === 0 ? answer : -1;
}

const answer = solution(x);
console.log(answer);
