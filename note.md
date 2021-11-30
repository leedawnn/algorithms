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

### 문자열 배열을 숫자 배열로 바꾸기

보통 input.txt에서 받아온 데이터를 배열로 바꿔서 문제를 푸는데, split을 하면 패턴에 맞게 잘라진 값들이 숫자가 아닌 문자열로 들어가게된다. 원래부터 문자열 배열이었으면 문제 없지만 숫자가 문자열로 들어가면 골치가 아프다. 😤

이 때, split 함수뒤에 **.map(Number)**만 써주면 자동으로 문자가 숫자로 바뀌어 배열로 들어가게 된다 👍🏻

### Reduce 함수 사용하기

reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환합니다.

**reducer의 형태: (accumulator, currentValue) => (반환값)**

- **배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당합니다.**
- **반환값은 그 이후의 원소에 대하여 accumulator에 저장됩니다.**

```javascript
let data = [5, 2, 9, 8, 4]

// minValue 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b))

console.log(minValue) // 2

// 원소의 합계 구하기 예제
let summary = data.reduce((a, b) => a + b)

console.log(summary) // 28
```
