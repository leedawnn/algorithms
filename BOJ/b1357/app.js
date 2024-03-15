const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

function solution(input) {
  const n1 = input[0].split('').reverse();
  const n2 = input[1].split('').reverse();

  const filteredN1 = Number(n1.join(''));
  const filteredN2 = Number(n2.join(''));

  const reverseNum = filteredN1 + filteredN2;

  console.log(String(reverseNum).split('').reverse().join('').replace(/^0+/, ''));
}

solution(input);
