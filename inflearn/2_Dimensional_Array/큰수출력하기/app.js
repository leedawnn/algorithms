/* 큰 수 출력하기

N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let arr = input[1].split(' ');
let temp = [];
let answer = [];

// 배열에서 차례대로 2개씩 temp에 넣고, 둘을 비교하여 큰 숫자를 answer에 옮겨 담기
for (let i = 0; i < arr.length; i++) {
  temp.push(arr[i], arr[i+1]);
  answer.push(Math.max(...temp))

  temp = [];
  if (i == arr.length - 2) break; 
}

// 중복 제거
const uniqAnswer = [...new Set(answer)];
console.log(uniqAnswer);


