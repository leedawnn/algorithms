function solution(phone_number) {
	phone_number = phone_number.split('');
	const phone = phone_number.splice(-4).join('');
	const hide = Array.from({ length: phone_number.length }, () => '*').join('');

	const answer = hide + phone;
	return answer;
}

solution('01033334444');
