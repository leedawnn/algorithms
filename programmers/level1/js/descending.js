function solution(s) {
	const answer = s
		.split('')
		.sort((a, b) => {
			return a > b ? -1 : 1;
		})
		.join('');
	return answer;
}

solution('Zbcdefg');

// 다른 풀이
function solution(s) {
	const result = s.split('').sort().reverse().join('');

	return result;
}
