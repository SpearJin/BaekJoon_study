const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testValue = [];
for (let i = 1; i <= +input[0]; i++) {
  const item = input[i].split(' ');
  testValue.push({
    R: item[0],
    S: item[1],
  });
}

solution(+input[0], testValue);

function solution(T, inputValue) {
  for (let i = 0; i < T; i++) {
    const { R, S } = inputValue[i];
    let answer = '';

    for (let j = 0; j < S.length; j++) {
      for (let k = 0; k < R; k++) {
        answer += S[j];
      }
    }
    console.log(answer);
  }
}
