const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let queue = [];

for (let i = 1; i <= input[0]; i++) {
  queue.push(i);
}

function solution(input, queue) {
  let count = 0;
  let temp = [];
  let answer = [];

  for (let i = 0; i < input[1]; i++) {
    if (count === input[1]) {
      answer.push(...queue);
      break;
    }

    temp.push(queue.slice(0, input[1] + 1));

    console.log(temp);
    queue.splice(0, input[1] + 1);

    temp = [];
    // for (let j = 0; j < input[1]; j++) {
    //   temp.push(queue.shift());
    //   answer.push(temp.pop());
    //   count++;

    //   temp = [];
    // }
  }

  // console.log(`<${answer.join(', ')}>`);
}

solution(input, queue);
