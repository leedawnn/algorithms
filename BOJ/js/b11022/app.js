let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(' ')
  console.log(`Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${Number(num[0]) + Number(num[1])}`)
}
