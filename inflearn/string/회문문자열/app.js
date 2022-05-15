/* 회문 문자열

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();

input = input.toLowerCase();

let temp = [];
let first = input.slice(0, 1);
let last = input.slice(-1);

// 먼저 맨 앞 문자와 마지막 문자가 같은지 비교
if (first === last) {
	temp.push(input.slice(1, input.length - 1));

	let tempReverse = String(temp).split('').reverse().join('');
	// 중간 문자들을 뒤집었을 때 같은지 비교
	if (String(temp) == tempReverse) {
		console.log('YES');
	} else if (String(temp).split(-1) == tempReverse.split(-1)) {
    console.log('YES');    
  } else {
		console.log('NO');
	}
} else { // 맨 앞 문자 !== 마지막 문자이면, 바로 탈락
	console.log('NO');
}
