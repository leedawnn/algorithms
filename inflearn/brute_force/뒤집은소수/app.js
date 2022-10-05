/* N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다. */

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let nums = input[1].split(' ');
let answer = [];

function isPrime(n) {
  if (n === 1) return false;

  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < nums.length; i++) {
  let numsReverse = Number(nums[i].split('').reverse().join(''));

  if (isPrime(numsReverse) === true) {
    answer.push(numsReverse);
  }
}

console.log(answer);
