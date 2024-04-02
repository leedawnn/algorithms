let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0].split(' ')[0])
let x = Number(input[0].split(' ')[1])
let data = input[1].split(' ')

let answer = ''

for (let i = 0; i <= data.length; i++) {
  if (data[i] < x) {
    answer += data[i] + ' '
  }
}

console.log(answer)
