// 테스트 2, 8번 통과X
function solution(board, moves) {
  let stack = [];
  let answer = 0;

  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        stack.push(board[i][x - 1]);
        board[i][x - 1] = 0;
        break;
      }
      if (stack.length > 1) {
        if (stack[stack.length - 2] === stack[stack.length - 1]) {
          stack.pop();
          stack.pop();
          answer += 2;
        }
      }
    }
  }
  return answer;
}

// 스택 중복 제거하는 부분을 첫 for문 안으로 넣었더니 통과,,,,
function solution(board, moves) {
  let stack = [];
  let answer = 0;

  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        stack.push(board[i][x - 1]);
        board[i][x - 1] = 0;
        break;
      }
    }
    if (stack.length > 1) {
      if (stack[stack.length - 2] === stack[stack.length - 1]) {
        stack.pop();
        stack.pop();
        answer += 2;
      }
    }
  }
  return answer;
}
