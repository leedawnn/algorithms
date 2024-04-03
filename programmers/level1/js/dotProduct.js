function solution(a, b) {
	let answer = 0;

	for (let i = 0; i < a.length; i++) {
		answer += a[i] * b[i];
	}
	return answer;
}

// 다른 풀이
function solution(a, b) {
	const answer = a.reduce((acc, cur, i) => {
		return acc + cur * b[i];
	}, 0);
	return answer;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
