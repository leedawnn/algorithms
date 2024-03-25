const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('').map(String);

function sol(input) {
  let answer = [];
  const lowerAlphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97)); // 소문자
  const upperAlphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)); // 대문자

  input.forEach((el) => {
    if (lowerAlphabet.indexOf(el) !== -1 || upperAlphabet.indexOf(el) !== -1) {
      if (lowerAlphabet.indexOf(el) !== -1) {
        let idx = lowerAlphabet.indexOf(el);
        let target = (idx + 13) % lowerAlphabet.length;
        answer.push(lowerAlphabet[target]);
      } else {
        let idx = upperAlphabet.indexOf(el);
        let target = (idx + 13) % upperAlphabet.length;
        answer.push(upperAlphabet[target]);
      }
    } else {
      answer.push(el);
    }
  });
  console.log(answer.join(''));
}

sol(input);
