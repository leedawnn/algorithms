let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

/*
첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 
점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
*/

let c = Number(input[0])
let curr = []
let count = 0

for (let i = 1; i < c + 1; i++) {
	curr = input[i].split(' ').map(Number)
	let n = curr[0]
	let data = curr.slice(1, n + 1)

	let sum = data.reduce((prev, sum) => (sum += prev))
	let avg = sum / n

	for (let j = 0; j < data.length; j++) {
		if (data[j] > avg) {
			count += 1
		}
	}
	let answer = count / n
	console.log(`${(answer * 100).toFixed(3)}%`)

	count = 0
}
