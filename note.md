# ⚡️ 자바스크립트 코딩테스트 노트

### 입력 받기

- fs 모듈(한 줄 입력)

```jsx
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
```

- fs 모듈(여러 줄 입력)

```jsx
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
```

- readline 모듈(한 줄 입력)

```jsx
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', function (line) {
  console.log(line)

  rl.close()
}).on('close', function () {
  // 문제 풀이
})
```

기본적으로 매개변수 line에 할당되는 것이 입력값이며, **문자열**로 할당됩니다. 그리고 console.log(line);에 의해 입력 받은 값이 출력됩니다.

- readline 모듈(여러 줄 입력)

```jsx
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  // 문제 풀이
})
```

### 각 자리 수 구하는 수식

- 1의 자리에 있는 수 구하기: **num % 10**
- 10의 자리에 있는 수 구하기: **Math.floor(num / 10)**
- 1의 자리에 있는 수 10의 자리 수로 만들기 : **(num % 10) \* 10**
