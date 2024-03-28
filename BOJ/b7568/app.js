const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el) => Number(el)));

// TODO: 복습!

let arr = input.slice(1, input.length);

function sol(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let rank = 1;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        // 현재 사람의 몸무게와 키가 다른 사람의 몸무게와 키보다 모두 작을 경우 rank 증가
        if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) rank++;
      }
    }
    answer.push(rank);
  }
  console.log(answer.join(' '));
}

sol(arr);
