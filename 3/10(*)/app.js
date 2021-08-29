const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
  for (let i = 1; i <= N; i++) {
    let answer = '';
    for (let j = N; j > i; j--) {
      answer += ' ';
    }
    for (let k = 0; k < i; k++) {
      answer += '*';
    }
    console.log(answer);
  }
}
