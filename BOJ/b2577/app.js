let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

/*
첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다. 
마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.
*/
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let inputs = input.map(Number)
let nums = inputs[0] * inputs[1] * inputs[2]

let res = String(nums).split('').map(Number)

for (let i = 0; i < res.length; i++) {
  count[res[i]] += 1
}

let answer = count.map(Number).join('\n')
console.log(answer)
