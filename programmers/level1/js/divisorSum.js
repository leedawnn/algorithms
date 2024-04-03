function solution(n) {
	let arr = [];

	if (n === 0) {
		return 0;
	} else {
		for (let i = 1; i < n + 1; i++) {
			if (n % i === 0) {
				arr.push(i);
			}
		}
		let answer = arr.reduce((acc, cur) => acc + cur);
		return answer;
	}
}
// 16번 케이스에서 런타임 에러가 났음.. => 0을 입력했을 때 경우를 써줘서 풀림

// 다른 풀이
function solution(n) {
	let answer = n;

	for (let i = 1; i <= n / 2; i++) {
		if (n % i === 0) answer += i;
	}
	return answer;
}

// 다른 풀이
function solution(n) {
	// n의 길이만큼 1로 채워진 배열이 만들어짐
	const answer = new Array(n).fill(1).reduce((cu, el, i) => {
		let num = el + i;
		return n % num === 0 ? cu + num : cu;
	}, 0);

	return answer;
}
