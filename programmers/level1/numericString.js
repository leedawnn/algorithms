function solution(s) {
	const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	for (let i = 0; i < numbers.length; i++) {
		// s = s.replace(numbers[i], i); 단어 하나만 찾아서 바꿔줌(중복단어x)
		// s = s.replaceAll(numbers[i], i);  모든 단어를 다 바꿔줌(중복단어o) 최신 문법이라서 프로그래머스에서 아직 지원하지 않음ㅠ
		while (s.includes(numbers[i])) {
			s = s.replace(numbers[i], i);
		}
	}
	return Number(s);
}

// 또 다른 풀이(핵깔꼼)
function solution(s) {
	const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	numbers.forEach((el, i) => {
		s = s.split(el).join(i);
	});

	return Number(s);
}

// 정규표현식
function solution(s) {
	const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	for (let i = 0; i < numbers.length; i++) {
		const reg = new RegExp(numbers[i], 'g'); // 이렇게 하면 정규표현식으로 변수를 할당할 수 있음
		s = s.replace(reg, i);
	}
	return Number(s);
}
