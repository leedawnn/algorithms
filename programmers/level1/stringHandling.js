function solution(s) {
	if (s.length === 4 || s.length === 6) {
		let regExp = /^\d+$/g;
		return regExp.test(s);
	}
}

solution('1234');

// 테스트 케이스 통과 못함..

// 다른 풀이 - isNaN()
function solution(s) {
	if (s.length !== 4 && s.length !== 6) {
		return false;
	}
	for (let i = 0; i < s.length; i++) {
		if (isNaN(s[i])) return false;
	}
	return true;
}

// 다른 풀이 - filter()
function solution(s) {
	if (s.length !== 4 && s.length !== 6) {
		return false;
	}

	const answer = s.split('').filter(num => {
		// 데이터가 숫자가 아닌 문자 타입만 남긴다.
		// NaN값인 데이터만 남긴다.
		return isNaN(num);
	});
	return answer.length === 0;
}
