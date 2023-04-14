let arr = [13, 5, 11, 7, 23, 15];

// for문
function solution1(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  console.log(answer);
}

solution1(arr);

// sort 함수
function solution2(arr) {
  const answer = arr.sort((a, b) => a - b);
  console.log(answer);
}

solution2(arr);
