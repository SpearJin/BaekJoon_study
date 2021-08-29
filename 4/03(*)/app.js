const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
  let num = N;
  let sum = 0;
  let cnt = 0;
  while (true) {
    cnt++;
    sum = Math.floor(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);
    if (N === num) {
      break;
    }
  }
  console.log(cnt);
}
