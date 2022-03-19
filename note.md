# ⚡️ 자바스크립트 코딩테스트 노트

## 목차

1. [입력받기](https://github.com/leedawnn/js-algorithm/blob/main/note.md#%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0)
2. [각 자리 수 구하는 식](https://github.com/leedawnn/js-algorithm/blob/main/note.md#%EA%B0%81-%EC%9E%90%EB%A6%AC-%EC%88%98-%EA%B5%AC%ED%95%98%EB%8A%94-%EC%88%98%EC%8B%9D)
3. [반올림(round), 올림(ceil), 내림(floor)](https://github.com/leedawnn/js-algorithm/blob/main/note.md#%EB%B0%98%EC%98%AC%EB%A6%BCround-%EC%98%AC%EB%A6%BCceil-%EB%82%B4%EB%A6%BCfloor)
4. [문자열 배열을 숫자 배열로 바꾸기](https://github.com/leedawnn/js-algorithm/blob/main/note.md#%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%B0%B0%EC%97%B4%EC%9D%84-%EC%88%AB%EC%9E%90-%EB%B0%B0%EC%97%B4%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B8%B0)
5. [Reduce 함수 사용하기](https://github.com/leedawnn/js-algorithm/blob/main/note.md#reduce-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
6. [배열에서 특정 값 개수 구하기](https://github.com/leedawnn/js-algorithm/blob/main/note.md#%EB%B0%B0%EC%97%B4%EC%97%90%EC%84%9C-%ED%8A%B9%EC%A0%95-%EA%B0%92-%EA%B0%9C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0)
7. [Array.from()으로 0으로 초기화된 배열 생성하기](https://github.com/leedawnn/js-algorithm/blob/main/note.md#arrayfrom%EC%9C%BC%EB%A1%9C-0%EC%9C%BC%EB%A1%9C-%EC%B4%88%EA%B8%B0%ED%99%94%EB%90%9C-%EB%B0%B0%EC%97%B4-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)
8. [중복값 제거하기](https://github.com/leedawnn/js-algorithm/blob/main/note.md#%EC%A4%91%EB%B3%B5%EA%B0%92-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0)
9. [배열에서 특정값 삭제하기](https://github.com/leedawnn/js-algorithm/blob/main/note.md#%EB%B0%B0%EC%97%B4%EC%97%90%EC%84%9C-%ED%8A%B9%EC%A0%95%EA%B0%92-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0)

---

### 입력 받기

BOJ를 예로 들었습니다.

- fs 모듈(한 줄 입력)

```jsx
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
```

- fs 모듈(여러 줄 입력)

```jsx
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
```

- readline 모듈(한 줄 입력)

```jsx
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  console.log(line);

  rl.close();
}).on('close', function () {
  // 문제 풀이
});
```

기본적으로 매개변수 line에 할당되는 것이 입력값이며, **문자열**로 할당됩니다. 그리고 console.log(line);에 의해 입력 받은 값이 출력됩니다.

- readline 모듈(여러 줄 입력)

```jsx
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  // 문제 풀이
});
```

---

### 각 자리 수 구하는 수식

- 1의 자리에 있는 수 구하기: **num % 10**
- 10의 자리에 있는 수 구하기: **Math.floor(num / 10)**
- 1의 자리에 있는 수 10의 자리 수로 만들기 : **(num % 10) \* 10**

---

### 반올림(round), 올림(ceil), 내림(floor)

- 올림: **Math.ceil(x)**

  ```javascript
  const ceil = Math.ceil(1.222); // 2
  const ceil_2 = Math.ceil(null); // 0
  const ceil_3 = Math.ceil(0); // 0
  const ceil_4 = Math.ceil(-1.777); // -1

  // 소수점 이하
  const ceil_5 = Math.ceil(1.222 * 10) / 10; // 1.3
  const ceil_6 = Math.ceil(1.222 * 100) / 100; // 1.23

  // 10단위, 100단위
  const ceil_7 = Math.ceil(1222 / 10) * 10; // 1230
  const ceil_8 = Math.ceil(1222 / 100) * 100; // 1300
  ```

- 내림 : **Math.floor(x)**

  ```javascript
  const floor = Math.floor(1.222); // 1
  const floor_2 = Math.floor(null); // 0
  const floor_3 = Math.floor(0); // 0
  const floor_4 = Math.floor(-1.777); // -2

  // 소수점이하
  const floor_5 = Math.floor(1.777 * 10) / 10; // 1.7
  const floor_6 = Math.floor(1.777 * 100) / 100; // 1.77

  // 10단위, 100단위
  const floor_7 = Math.floor(1777 / 10) * 10; // 1770
  const floor_8 = Math.floor(1777 / 100) * 100; // 1700
  ```

- 반올림 : **Math.round(x)**

  ```javascript
  const round = Math.round(1.222); // 1
  const round_2 = Math.round(null); // 0
  const round_3 = Math.round(0); // 0

  // 소수점이하
  const round_4 = Math.round(1.777 * 10) / 10; // 1.8

  // 10단위
  const round_5 = Math.round(1001 / 10) * 10; // 1000
  const round_6 = Math.round(1005 / 10) * 10; // 1010
  ```

---

### 문자열 배열을 숫자 배열로 바꾸기

보통 input.txt에서 받아온 데이터를 배열로 바꿔서 문제를 푸는데, split을 하면 패턴에 맞게 잘라진 값들이 숫자가 아닌 문자열로 들어가게된다. 원래부터 문자열 배열이었으면 문제 없지만 숫자가 문자열로 들어가면 골치가 아프다. 😤

이 때, split 함수뒤에 **.map(Number)** 만 써주면 자동으로 문자가 숫자로 바뀌어 배열로 들어가게 된다 👍🏻

---

### Reduce 함수 사용하기

reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환합니다.

**reducer의 형태: (accumulator, currentValue) => (반환값)**

- **배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당합니다.**
- **반환값은 그 이후의 원소에 대하여 accumulator에 저장됩니다.**

```javascript
let data = [5, 2, 9, 8, 4];

// minValue 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b));

console.log(minValue); // 2

// 원소의 합계 구하기 예제
let summary = data.reduce((a, b) => a + b);

console.log(summary); // 28
```

---

### 배열에서 특정 값 개수 구하기

- filter()

```javascript
const arr = ['a', 'b', 'c', 'a'];

// 배열에서 'a' 개수 구하기
let count = arr.filter(element => 'a' === element).length;

console.log(count); // 2
```

배열에서 특정 조건에 부합하는 값들만을 모아서 새로운 배열로 리턴하는 함수. filter 함수는 callback 함수에서 true를 리턴하는 element들을 모아서 새로운 배열을 만들어서 리턴한다.

---

### Array.from()으로 0으로 초기화된 배열 생성하기

```javascript
// Array.from()으로 길이가 5, 값이 0인 배열 생성하기
const arr = Array.from({ length: 5 }, () => 0);
console.log(arr); // Array(5) [0, 0, 0, 0, 0]
console.log(arr[0]); // 0
console.log(arr.length); // 5
```

Array.from()의 첫번째 매개변수로 **{length: 원하는 길이}** 객체를,
두번째 매개변수로 **원하는 값을 반환하는 콜백함수**를 넘겨주면 된다.

---

### 중복값 제거하기

- set()

```javascript
const dupArr = [1, 2, 3, 1, 2];

const set = new Set(dupArr);

const uniqueArr = [...set];

console.log(Array.isArray(uniqueArr));
console.log(uniqueArr);
```

위의 예제에서는
**const set = new Set(dupArr);**

중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거한 후,
**const uniqueArr = [...set];**

Spread Operator(전개연산자)를 사용하여 Set 객체를 다시 배열로 변환한다. Set 객체를 배열로 변환할 때, Spread Operator 대신 Array.from() 또는 forEach() 문을 사용할 수도 있음!

---

### 배열에서 특정값 삭제하기

- splice()

```javascript
let arr = ['a', 'b', 'b', 'c'];

// 원소 'b' 삭제
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'b') {
    arr.splice(i, 1);
    i--;
  }
}
```

반복문과 if문, splice() 함수를 이용하여 특정값을 삭제하는 코드이다. splice() 함수를 사용하면, 원본 배열의 원소가 삭제되고 배열의 길이가 변하기 때문에 splice() 함수를 사용해서 원소를 1개 삭제한 후에는, 배열의 index를 참조하는 i의 값을 하나 감소시킨 것(i--)에 주의해야함!

- filter()

```javascript
let arr = ['a', 'b', 'b', 'c'];

// 원소 'b' 삭제
let filtered = arr.filter(element => element !== 'b');

console.log(arr); // ['a', 'b', 'b', 'c']
console.log(filtered); // ['a', 'c']
```

filter() 함수는 특정 조건에 부합하는 값만 모아서 새로운 배열을 만들어서 리턴한다. 위 코드는 배열 원소의 값이 'b'가 아닌 원소들을 가지고 새로운 배열을 만들었다.

### 문자열을 배열로 변환하기

```javascript
const input = ['ksekkset'];
const arr = Array.from(input);

console.log(arr); // ['k', 's', 'e', 'k', 'k', 's', 'e', 't']
```

Javascript에는 문자열을 한꺼번에 배열로 만들 때 편하게 처리해주는 from이라는 기능이 있음.

### 배열에서 원하는 값 찾기

자바스크립트에서 배열에서 특정 값을 검색할 때, indexOf()와 includes()를 이용하여 쉽게 찾을 수 있다.

```javascript
var a = [1, 2, 3, 4, 5, 1, 2, 3];

a.indexOf(3); //2
a.indexOf(6); //-1
```

indexOf()는 찾은 값의 첫번째 원소의 위치를 반환해주며, 없을 경우 -1을 리턴함.

```javascript
var a = [1, 2, 3, 4, 5, 1, 2, 3];

a.includes(3); //true
a.includes(6); //false
```

includes()는 true / false 로 있다, 없다를 직관적으로 리턴해줌.
