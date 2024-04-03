function solution(arr) {
	let sum = arr.reduce((acc, cur) => acc + cur);
	let answer = sum / arr.length;
	return answer;
}
