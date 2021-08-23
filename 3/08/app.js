const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
solution(+input[0]);

function solution(n) {
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      answer = answer + '*';
    }
    if (i === n) {
      break;
    }
    answer = answer + '\n';
  }
  console.log(answer);
}
