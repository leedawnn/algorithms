let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = Number(input[0])

for (i = num; ; ) {
  for (j = 1; j < 10; j++) {
    console.log(`${num} * ${j} = ${num * j}`)
  }
  break
}
