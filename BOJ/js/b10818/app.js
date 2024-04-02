// Math.min(), Math.max()를 사용해서 풀면 StackSizeExceeded가 나옴..

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let data = input[1].split(' ').map(Number)

let minValue = data.reduce((acc, cur) => Math.min(acc, cur))
let maxValue = data.reduce((acc, cur) => Math.max(acc, cur))

console.log(minValue, maxValue)
