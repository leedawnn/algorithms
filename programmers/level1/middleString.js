function solution(s) {
	if (s.length % 2 === 1) {
		return s[Math.floor(s.length / 2)];
	} else {
		return `${s[Math.floor(s.length / 2) - 1]}${s[Math.floor(s.length / 2)]}`;
	}
}

// 다른 풀이
function solution(s) {
	const center = Math.floor(s.length / 2);
	const answer = s.length % 2 !== 0 ? s[center] : s.slice(center - 1, center + 1);

	return answer;
}
