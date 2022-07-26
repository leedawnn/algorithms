function solution(x) {
	let arr = String(x).split('').map(Number);
	let sum = arr.reduce((acc, cur) => acc + cur);

	if (x % sum === 0) {
		return true;
	} else {
		return false;
	}
}
