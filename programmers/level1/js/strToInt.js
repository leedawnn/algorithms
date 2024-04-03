function solution(s) {
	let answer = 0;

	if (s.length > 1 && s.length < 6) {
		s = s.split('');
		let first = s[0];

		if (first === '0') {
			s.shift();
		}
		answer = Number(s.join(''));
	}
	return answer;
}

// 엄청난 풀이
function strToInt(str) {
	return str / 1;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(strToInt('-1234'));
