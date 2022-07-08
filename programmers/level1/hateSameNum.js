function solution(arr) {
	let answer = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i + 1]) {
			answer.push(arr[i]);
		}
	}
	return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);

// 다른 사람의 풀이
function solution(arr) {
	return arr.filter((el, index) => el !== arr[index + 1]);
}

/* 처음에 풀려고 했던 방식

1. [...new Set(arr)]로 중복 제거
2. 한번 더 중복 제거 
3. return arr! 

그런데... 이렇게 하니까 배열이 배열 안에 들어가고 그 배열이 배열에 들어감.,..,.,,.?
*/
