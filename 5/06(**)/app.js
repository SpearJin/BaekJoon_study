const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const scoreLength = +input[0];
input = input.slice(1);

solution(input);

function solution(arr) {
  for (let i = 0; i < scoreLength; i++) {
    let score = 0;
    let cnt = 0;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'O') {
        cnt++;
      } else {
        cnt = 0;
      }
      score += cnt;
    }
    console.log(score);
  }
}
