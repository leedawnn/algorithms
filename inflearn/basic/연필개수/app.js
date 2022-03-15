/* 연필 개수

연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생 수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
input = input.split(' ');

let n = +input[0];
let pencil = Math.ceil(n / 12);

console.log(pencil);
