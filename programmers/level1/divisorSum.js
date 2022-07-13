function solution(n) {
	let arr = [];

	if (n === 0) {
		return 0;
	} else {
		for (let i = 1; i < n + 1; i++) {
			if (Math.floor(n % i) === 0) {
				arr.push(i);
			}
		}
		let answer = arr.reduce((acc, cur) => acc + cur);
		return answer;
	}
}
// 16번 케이스에서 런타임 에러가 났음.. => 0을 입력했을 때 경우를 써줘서 풀림
