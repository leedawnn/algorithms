/* 문자열 압축

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 
단, 반복횟수가 1인 경우 생략합니다.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
let count = 1;
let answer = [];

for (let i = 0; i < input.length - 1; i++) {
	if (input[i] === input[i + 1]) {
		count++;
	} else {
		answer += input[i];
		if (count > 1) answer += String(count);
		count = 1;
	}
}

console.log(answer);
