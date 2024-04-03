function solution(x, n) {
	let answer = [];

	for (let i = 1; i < n + 1; i++) {
		answer.push(x * i);
	}
	return answer;
}

// 다른 풀이
function solution(x, n) {
	const answer = new Array(n).fill(1).map((num, i) => (num + i) * x);
	return answer;
}
