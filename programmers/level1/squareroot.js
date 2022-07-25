// 나의 풀이 - 단순히 n까지라고 집어넣어서 시간복잡도를 고려했을 때는 걸릴 수도 있을 것 같음.
function solution(n) {
	let answer = 0;

	for (let i = 1; i <= n; i++) {
		if (i * i === n) {
			answer = (i + 1) ** 2;
			return answer;
		} else {
			answer = -1;
		}
	}
	return answer;
}

// 다른 풀이
function solution(n) {
	let answer = -1;

	for (let i = 1; i * i <= n; i++) {
		if (i * i === n) {
			answer = i + 1;
			return answer * answer;
		}
	}
	return answer;
}

// 또 다른 풀이
function solution(n) {
	let answer = -1;

	for (let i = 1; i * i <= n; i++) {
		if (i * i === n) {
			return (i + 1) ** 2;
		}
	}
	return answer;
}

// 또또 다른 풀이
function solution(n) {
	let sqrt = Math.sqrt(n);
	if (Number.isInteger(sqrt) === true) {
		return (sqrt + 1) ** 2;
	} else {
		return -1;
	}
}
