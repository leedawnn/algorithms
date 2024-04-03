// 근데 중괄호랑 return 없이는 왜 안나오는거지
function solution(participant, completion) {
	participant.sort();
	completion.sort();
	let filtered = participant.filter((el, i) => {
		return el !== completion[i];
	});
	return filtered[0];
}

// 100,000 이하 => 효율성 체크!

function solution(participant, completion) {
	participant.sort();
	completion.sort();

	let answer = '';
	for (let i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) {
			answer = participant[i];
			break;
		}
	}
	return answer;
}
