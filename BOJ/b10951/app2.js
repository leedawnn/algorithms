let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let i = 0

while (i < input.length - 1) {
  let data = input[i].split(' ').map(x => Number(x))

  a = data[0]
  b = data[1]
  console.log(a + b)

  i += 1
}
