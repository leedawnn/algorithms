/* 가운데 문자 출력

소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 
단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

let mid = Math.floor(input.length / 2);
let answer;

if (input.length % 2 === 1) answer = input.substring(mid, mid + 1);
else answer = input.substring(mid - 1, mid + 1);

console.log(answer);
