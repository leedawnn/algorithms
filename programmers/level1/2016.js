// function solution(a, b) {
// 	let calendar = {
// 		month: 0,
// 		date: 0,
// 		day: 'SUN',
// 	};

// 	function whatDay() {
// 		let day = [FRI, SAT, SUN, MON, TUE, WED, THU];

// 		for (let i = 0; i < 366; i++) {
// 			for (let j = 0; j < day.length; j++) {
// 				calendar.day = day[j];
// 			}
// 		}
// 	}

// 	for (let i = 1; i < 13; i++) {
// 		if (i >= 8 && i % 2 === 0) {
// 			for (let j = 1; j <= 31; j++) {
// 				calendar.month = i;
// 				calendar.date = j;
// 		} if else (i <= 8 && i % 2 !== 0) {
// 				for (let j = 1; j <= 31; j++) {
// 					calendar.month = i;
// 					calendar.date = j;
// 				}
// 			}
// 		}
// 	}
// }

// 객체를 이용해서 풀려고 했는데,,, 코드 왕 이상해짐 ㅠ 그냥 달마다 일수를 객체로 처음부터 정해놓으면 편하네...

// 다른 풀이
function solution(a, b) {
	const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
	const month = {
		1: 31,
		2: 29,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 31,
		11: 30,
		12: 31,
	};

	let answer = 0;

	for (let i = 1; i < a; i++) {
		answer += month[i];
	}

	answer += b - 1;
	console.log(week[answer % 7]);
}

// 또 다른 풀이
function solution(a, b) {
	const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
	const month = {
		1: 31,
		2: 29,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 31,
		11: 30,
		12: 31,
	};

	const answer = Array(a)
		.fill(1)
		.reduce((acc, cur, i) => {
			const mn = cur + i;
			return acc + (mn !== a ? month[mn] : b - 1);
		}, 0);
	return week[answer % 7];
}

// 또또 다른 풀이
function solution(a, b) {
	const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const answer = new Date(2016, a - 1, b).getDay();

	return week[answer];
}
