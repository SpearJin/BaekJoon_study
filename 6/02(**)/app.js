const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function f(num) {
  const numStr = String(num);

  if (num < 100) {
    return true;
  }

  let beforNum = numStr[1];
  const diff = numStr[1] - numStr[0];
  for (let i = 2; i < numStr.length; i++) {
    if (numStr[i] - beforNum !== diff) {
      return false;
    } else {
      beforNum = numStr[i];
    }
  }
  return true;
}

function solution(N) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    const num = f(i);
    if (num) {
      answer++;
    }
  }
  console.log(answer);
}
