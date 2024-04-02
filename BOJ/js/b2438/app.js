let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let res = ''

for (let i = 0; i < input[0]; i++) {
  for (let j = 0; j <= i; j++) {
    res += '*'
  }
  res += '\n'
}

console.log(res)
