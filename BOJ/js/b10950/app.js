let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
let num = Number(input[0])

for (let i = 0; i < num; i++) {
  let a = Number(input[i + 1].split(' ')[0])
  let b = Number(input[i + 1].split(' ')[1])
  console.log(a + b)
}
