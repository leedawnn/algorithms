function solution(s) {
	let p = 0;
	let y = 0;

	s = s.toLowerCase();
	s.split('');

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'p') {
			p++;
		} else if (s[i] === 'y') {
			y++;
		}
	}

	if (p === y) {
		return true;
	} else {
		return false;
	}
}

// 다른 풀이
function solution(s) {
	const check = {};
	const answer = s
		.toLowerCase()
		.split('')
		.forEach(str => {
			check[str] === undefined ? (check[str] = 1) : (check[str] += 1);
		});
	return check.p === check.y;
}
