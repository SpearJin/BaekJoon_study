const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], input.slice(1));

function solution(N, inputArray) {
  let answer = 0;
  for (let i = 0; i < N; i++) {
    const nowW = inputArray[i];

    const obj = {};
    let nowC = nowW[0];
    let isChecked = true;
    for (let j = 1; j <= nowW.length; j++) {
      if (nowC !== nowW[j]) {
        if (obj[nowC]) {
          obj[nowC] = false;
          isChecked = false;
        } else {
          obj[nowC] = true;
          nowC = nowW[j];
        }
      }
    }

    if (isChecked) {
      answer++;
    }
  }
  console.log(answer);
}
