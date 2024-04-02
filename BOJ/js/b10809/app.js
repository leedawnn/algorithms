const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(''));

const arr = input[0];

function solution(arr) {
  let nums = Array(26).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    let index = arr[i].charCodeAt() - 97;

    if (nums[index] === -1) {
      nums[index] = i;
    }
  }

  console.log(...nums);
}

solution(arr);
