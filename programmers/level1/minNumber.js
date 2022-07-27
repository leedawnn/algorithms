function solution(arr) {
	let min = Math.min(...arr);

	if (arr.length > 1) {
		arr.splice(arr.indexOf(min), 1);
		return arr;
	} else {
		return [-1];
	}
}

solution([10]);

// 다른 풀이
function solution(arr) {
	const answer = [];

	let min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== min) answer.push(arr[i]);
	}
	return answer.length === 0 ? [-1] : answer;
}

// 또 다른 풀이
function solution(arr) {
	const min = Math.min(...arr);
	const answer = arr.filter(num => {
		return num !== min;
	});
	return answer.length === 0 ? [-1] : answer;
}
