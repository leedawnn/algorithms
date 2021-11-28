let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let i = 0
let answer = ''
let inputs = []

while (i < input.length - 1) {
  inputs.push(input[i].split(' ')) // 1 1
  let sum = Number(inputs[i][0]) + Number(inputs[i][1])

  answer += sum + '\n'
  i += 1
}

console.log(answer)
