/* 가장 긴 문자열

N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
input = input.split('\n');
input.shift();

let answer = input[0];

for (let i = 0; i < input.length; i++) {
  if (input[i].length > answer.length) {
    answer = input[i];
  }
}

console.log(answer);
