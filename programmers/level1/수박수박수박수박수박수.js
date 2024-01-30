function solution(n) {
  let answer = "";

  for (let i = 1; i < n + 1; i++) {
    const odd = "수";
    const even = "박";

    if (i % 2 === 1) {
      answer += odd;
    }

    if (i % 2 === 0) {
      answer += even;
    }
  }
  return answer;
}
