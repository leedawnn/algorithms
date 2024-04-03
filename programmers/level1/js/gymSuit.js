/* rules
- 바로 앞번호나 뒷번호에게만 체육복을 빌려줄 수 있다.
- 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. ㅋ? => filter
- return = n - 최종 lost

- case
  - reserve 갯수만큼 for문을 돌려야겠네..   
  - if lost가 1일 경우 => reserve가 반드시 2여야만 함
  - else if (lost[i] === reserve[i] - 1 || reserve[i] + 1) {
    - filter로 거르기 lost가 1일 경우 => reserve가 반드시 2여야만 함
*/

// 나의 풀이
// function solution(n, lost, reserve) {
// 	let answer = n - lost.length;
// 	let losted = [...lost];

// 	lost = lost.filter(student => reserve.includes(student) === false).sort((a, b) => a - b);
// 	reserve = reserve.filter(student => losted.include(student) === false).sort((a, b) => a - b);

// 	for (let i = 0; i < reserve.length; i++) {
// 		if (lost[i] === 1 && reserve.includes(2) === true) {
// 			lost.shift();
// 		} else if (lost[i] > 1 && (lost[i] === reserve[i] - 1 || reserve[i] + 1)) {
// 			answer = lost.filter(el => el !== lost[i]);
// 		}
// 	}
// 	console.log(answer);
// }

// 멘토님 풀이
function solution(n, lost, reserve) {
	const losted = [...lost];

	lost = lost.filter(student => reserve.includes(student) === false).sort((a, b) => a - b); // 여기서 lost 변경되어서 위에 하나 복사해놓기(데이터 뒤죽박죽 되서 케이스 통과 못함 => sort)
	reserve = reserve.filter(student => losted.includes(student) === false).sort((a, b) => a - b);
	// 체육복을 잃어버린 학생들의 수를 뺀 값을 초기값으로 저장(= 체육 수업을 들을 수 있는 학생 수)
	let answer = n - lost.length;

	for (let i = 0; i < lost.length; i++) {
		// 잃어버린 학생의 앞 번호를 조회
		if (reserve.includes(lost[i] - 1)) {
			reserve.splice(reserve.indexOf(lost[i] - 1), 1);
			answer++;
			// 잃어버린 학생의 뒷 번호를 조회
		} else if (reserve.includes(lost[i] + 1)) {
			reserve.splice(reserve.indexOf(lost[i] + 1), 1);
			answer++;
		}
	}
	return answer;
}

solution(5, [2, 4], [1, 3, 5]);

// 다른 풀이
function solution(n, lost, reserve) {
	const losted = [...lost];

	lost = lost.filter(student => reserve.includes(student) === false).sort((a, b) => a - b);
	reserve = reserve.filter(student => losted.includes(student) === false).sort((a, b) => a - b);
	let answer = n - lost.length;

	lost.forEach(student => {
		// 앞에 있는 학생의 인덱스 값
		const prev = reserve.indexOf(student - 1);

		// 뒤에 있는 학생의 인덱스 값
		const next = reserve.indexOf(student + 1);

		if (prev !== -1) {
			// 앞에 있는 학생이 여벌 체육복이 있을 경우
			answer++;
			reserve.splice(prev, 1);
		} else if (next !== -1) {
			// 뒤에 있는 학생이 여벌 체육복이 있을 경우
			answer++;
			reserve.splice(next, 1);
		}
	});

	return answer;
}
