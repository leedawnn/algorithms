let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
let n = Number(input[0])
let sum = 0

for (let i = 1; i < n + 1; i++) {
  sum += i
}

console.log(sum)
