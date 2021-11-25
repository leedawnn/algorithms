// 아니 이게 왜 틀리지? 나동빈님께 물어보자.

let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')

/*

    *
   **
  ***
 ****
*****

*/

let answer = ''

for (let i = 1; i <= input; i++) {
  answer += ' '.repeat(5 - i) + '*'.repeat(i) + '\n'
}

console.log(answer)
