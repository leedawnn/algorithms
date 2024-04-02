const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const t = input.shift();
const arr = input.slice(1);

console.log(t);

function sum(arr) {}

// 문제를 잘 읽자.....
function sol(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += t) {
    newArr.push(arr.slice(i, i + t));
  }

  console.log(newArr);
}

sol(arr);
