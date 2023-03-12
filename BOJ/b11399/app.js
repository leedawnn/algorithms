let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const order = input[1].split(' ').map(Number);
const newOrder = order.sort((a, b) => a - b); // [1, 2, 3, 3, 4]
let temp = 0;
let answer = 0;

for (let i = 0; i < newOrder.length; i++) {
  temp += newOrder[i];
  if (temp) {
    answer += temp;
  }
}

console.log(answer);
