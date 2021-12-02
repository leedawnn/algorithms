let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

/*
"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 
문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
예를 들어, 10번 문제의 점수는 3이 된다. "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
*/

let n = Number(input[0])
let temp = []
let count = 0
let sum = 0

for (let i = 0; i < n; i++) {
	sum = 0
	count = 0
	temp = input[i + 1].split('').map(String)
	for (let j = 0; j < temp.length; j++) {
		if (temp[j] === 'X') {
			count = 0
		} else {
			count += 1
			sum += count
		}
	}
	console.log(sum)
}
