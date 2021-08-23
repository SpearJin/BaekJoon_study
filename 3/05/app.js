const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
solution(+input[0]);

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      answer += i;
      break;
    }
    answer += i + '\n';
  }
  console.log(answer);
}
