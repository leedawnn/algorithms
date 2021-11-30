let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let data = input.map(Number)

for (let i = 0; i < data.length; i++) {
  if (Math.max(...data) == data[i]) {
    console.log(Math.max(...data), i + 1)
  }
}
