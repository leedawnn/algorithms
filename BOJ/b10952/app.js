let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

/* 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

1 1
2 3
3 4
9 8
5 2
0 0
*/

let inputs = []
let isNotZero = true
let i = 0
let answer = ''

while (isNotZero) {
  inputs.push(input[i].split(' '))
  let sum = Number(inputs[i][0]) + Number(inputs[i][1])

  if (sum == 0) {
    isNotZero = false
  } else {
    answer += sum + '\n'
    i += 1
  }
}

console.log(answer)
