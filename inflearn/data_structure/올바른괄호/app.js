let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
input = input.split('');

function solution(input) {
  let answer = 'YES';
  let stack = [];

  for (let x of input) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) answer = 'NO';

      stack.pop();
    }
  }
  if (stack.length > 0) answer = 'NO';

  console.log(answer);
  return answer;
}

solution(input);
