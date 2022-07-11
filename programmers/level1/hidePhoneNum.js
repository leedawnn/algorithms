function solution(phone_number) {
	phone_number = phone_number.split('');
	const phone = phone_number.splice(-4).join('');
	const hide = Array.from({ length: phone_number.length }, () => '*').join('');

	const answer = hide + phone;
	return answer;
}

solution('01033334444');

// 다른 풀이
function solution(phone_number) {
	let answer = '';

	for (let i = 0; i < phone_number.length; i++) {
		if (i < phone_number.length - 4) {
			answer += '*';
		} else {
			answer += phone_number[i];
		}
	}
	return answer;
}
