function solution(numbers) {
	let temp = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			let sum = numbers[i] + numbers[j];
			temp.push(sum);
		}
	}
	let answer = [...new Set(temp)];
	return answer.sort((a, b) => a - b);
}

// 다른 풀이
function solution(numbers) {
	let answer = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			const sum = numbers[i] + numbers[j];

			if (answer.includes(sum) === false) {
				answer.push(sum);
			}
		}
	}
	return answer.sort((a, b) => a - b);
}
