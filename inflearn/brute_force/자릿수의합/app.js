/* 자릿 수의 합

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
만약 235와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다. */

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let answer = [];
index = [];

// 자연수 각 자리 수를 나눠 합 구하기
for (let i = 0; i < arr.length; i++) {
	let temp = String(arr[i]).split('').map(Number);
	let add = temp.reduce((a, b) => a + b);
	answer.push(add);
}

// 가장 큰 자릿수의 합
let max = Math.max(...answer);
let count = answer.filter(el => max === el).length;

if (count > 1) {
	// max값이 2개 이상이면 그 값을 answer에서 찾아서 해당값 추출
	for (let i = 0; i < answer.length; i++) {
		index.push(answer.indexOf(max));
	}
	console.log(index);
} else {
	console.log(arr[answer.indexOf(max)]); // max값이 하나면 그 값 추출
}
