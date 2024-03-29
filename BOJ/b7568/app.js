const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const arr = input.slice(1);

function sol(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let rank = 1;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) rank++;
      }
    }
    answer.push(rank);
  }
  console.log(answer.join(' '));
}

sol(arr);
