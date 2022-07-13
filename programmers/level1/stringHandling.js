function solution(s) {
	if (s.length === 4 || s.length === 6) {
		let regExp = /^\d+$/g;
		return regExp.test(s);
	}
}

solution('1234');

// 테스트 케이스 통과 못함..
