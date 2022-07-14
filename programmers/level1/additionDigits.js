function solution(n) {
	let d = String(n).split('').map(Number);
	let result = d.reduce((acc, cur) => acc + cur);

	return result;
}
