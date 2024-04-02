const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const n = input.shift();
let answer = '';

for (let i = 0; i < n; i++) {
  let cnt = Number(input[i].split(' ')[0]);
  let str = input[i].split(' ')[1];
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < cnt; k++) {
      answer += str[j];
    }
  }
  answer += '\n';
}

console.log(answer);
