let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

function as(range) {
  // 배열의 원소를 하나씩 떼어서 등차수열인지 확인
  let n = range;
  let res;
  
  for (let i = 1; i < n + 1; i++) {
    if (i > 10) {
      res = String(n).split('');
      return res;
    }
  }
}

let range = Number(input); // input값 가져와서 range에 저장
let hansoo = Array(range).fill(false); // range 갯수만큼 배열 만들어서 true값으로 초기화

for (let i = 1; i <= range; i++) {
  hansoo[as(i)] = true;
}

for (let i = 0; i < range; i++) {
  if (hansoo[i]) {
    console.log(i);
  }
}
