function solution(s) {
	let answer = s.split(' ');
	let str = '';

	for (let i = 0; i < answer.length; i++) {
		for (let j = 0; j < answer[i].length; j++) {
			if (j % 2 !== 0) {
				str += answer[i][j].toLowerCase();
			} else {
				str += answer[i][j].toUpperCase();
			}
		}
		if (i < answer.length - 1) {
			str += ' ';
		}
	}
	return str;
}

solution('try hello world');

// 다른 풀이
function solution(s) {
	const answer = s
		.split(' ')
		.map(word => {
			return word
				.split('')
				.map((letter, i) => {
					return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
				})
				.join('');
		})
		.join(' ');
	return answer;
}
