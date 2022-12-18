/* N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다. */

function solution(input) {
  let answer = [];
  let arr = input[1];

  let temp = arr.map((el) =>
    String(el)
      .split('')
      .map(Number)
      .reduce((cur, acc) => cur + acc, 0),
  );

  temp.filter((el, index) => {
    if (el === Math.max(...temp)) {
      answer.push(index);
    }
  });

  if (answer.length > 1) {
    let comp = [];

    answer.forEach((el) => {
      comp.push(arr[el]);
    });
    return Math.max(...comp);
  } else {
    return arr[answer[0]];
  }
}

const input = [[7], [128, 460, 603, 40, 521, 137, 123]];

solution(input);
