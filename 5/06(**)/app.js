const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const scoreLength = +input[0];
input = input.slice(1);
solution(scoreLength, input);

function solution(N, arr) {
  for (let i = 0; i < N; i++) {
    let answer = 0;
    let cnt = 0;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'O') {
        cnt++;
      } else {
        cnt = 0;
      }
      answer += cnt;
    }
    console.log(answer);
  }
}
