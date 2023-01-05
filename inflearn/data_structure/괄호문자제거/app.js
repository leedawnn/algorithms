let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
input = input.split('');

function solution(input) {
  let stack = [];

  for (let x of input) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }

  return stack.join('');
}

solution(input);
