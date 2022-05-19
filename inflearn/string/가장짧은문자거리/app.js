/* 가장 짧은 문자거리
 
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split(' ');
let t = input[1];

let answer = [];
let p = 1000;

for (let x of input) {
	if (x === t) {
		p = 0;
		answer.push(p);
	} else {
		p++;
		answer.push(p);
	}
}

p = 1000;

for (let i = input.length - 1; i >= 0; i--) {
	if (input[i] === t) p = 0;
	else {
		p++;
		answer[i] = Math.min(answer[i], p);
	}
}
console.log(answer);
