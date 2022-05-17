/* 숫자만 추출

문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다.
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
let answer;

// 문자열에서 숫자만 추출
input = input.replace(/[^0-9]/g, '').split('');

// 첫번째 값이 0이면 삭제
if (input[0] === '0') {
	input.shift();
}

// 자연수 100,000,000을 넘지 않는 수이면 출력
if (input.join('') < 100000000) {
	answer = input.join('');
	console.log(answer);
}
