let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
input = input.split('');

function solution(input) {
  let answer = 0;
  let stack = [];

  for (let x of input) {
    if (!isNaN(x)) stack.push(Number(x)); // isNaN : 숫자가 아니면 true
    else {
      let rt = stack.pop();
      let lt = stack.pop();

      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}
solution(input);
