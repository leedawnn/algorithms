function solution(seoul) {
	let index = seoul.indexOf('Kim');
	return `김서방은 ${index}에 있다`;
}

// 다른 풀이
function solution(seoul) {
	for (let i = 0; i < seoul.length; i++) {
		if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`;
	}
}
