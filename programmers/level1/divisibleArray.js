// function solution(arr, divisor) {
// 	let answer = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < 0 || divisor < 0) {
// 			return;
// 		}

// 		if (arr[i] % divisor === 0) {
// 			answer.push(arr[i]);
// 		} else if (answer.length === 0) {
// 			answer.push(-1);
// 		}
// 	}
// 	const result = answer.sort((a, b) => a - b);
// 	return result;
// }

// 테스트 케이스 통과 못함,,

function solution(arr, divisor) {
	let result = arr.filter(el => el % divisor === 0);
	if (result.length === 0) {
		result.push(-1);
	}
	let answer = result.sort((a, b) => a - b);
	return answer;
}

// 이건 통과... 시간 복잡도 문제 였던 것 같다,,
