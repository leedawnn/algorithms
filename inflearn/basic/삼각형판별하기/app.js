/* 삼각형 판별하기

길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 
만들 수 없으면 ”NO"를 출력한다. */

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
input = input.split(' ');

let a = +input[0];
let b = +input[1];
let c = +input[2];

// a, b, c의 막대 길이가 서로 다를 때
if (a !== b && b !== c && c !== a) {
  let answer = 'YES',
    max;
  let total = a + b + c;

  if (a > b) max = a;
  else max = b;

  if (c > b) max = c;
  if (total - max <= max) answer = 'NO';

  console.log(answer);
}
