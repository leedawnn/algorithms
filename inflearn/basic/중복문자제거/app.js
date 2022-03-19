/* 중복 문자 제거

소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
*/

// 방법 1(Fail)
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

let arr = Array.from(input);

for (let i = 0; i < arr.length; i++) {
  let answer = arr.push(arr[i]);
  console.log(arr[i]);

  if (answer.includes(arr[i]) === true) {
    // TypeError: answer.includes is not a function 여기서 오류나네....
    answer.pop();
    console.log('pop:', answer);
  }
}

console.log(answer);

// 방법 2
let arr = Array.from(input);
let set = new Set(arr);
let uniqueArr = [...set];
console.log(uniqueArr);
