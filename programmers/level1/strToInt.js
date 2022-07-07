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
