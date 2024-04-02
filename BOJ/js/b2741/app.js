let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')

let answer = ''
let n = Number(input)

for (let i = 1; i < n + 1; i++) {
  answer += i + '\n'
}
console.log(answer) // 빈 문자열 answer에 for문으로 담아서 한 번에 출력. 이렇게 안하면 시간 초과 나옴
