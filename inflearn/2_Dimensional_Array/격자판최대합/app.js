let arr = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19],
];

let num = arr.length;
let sum1 = (sum2 = answer = 0);
// 행과 열에 대한 최대 합 구하기
for (let i = 0; i < num; i++) {
	sum1 = sum2 = 0;
	for (let j = 0; j < num; j++) {
		sum1 += arr[i][j];
		sum2 += arr[j][i];
	}
	answer = Math.max(answer, sum1, sum2);
	sum1 = sum2 = 0;
	// 대각선에 대한 최대 합 구하기
	for (let i = 0; i < num; i++) {
		sum1 += arr[i][i];
		sum2 += arr[i][num - i - 1];
	}
	answer = Math.max(answer, sum1, sum2);
}

console.log(answer);
