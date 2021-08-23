const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const newInput = input[0].split(' ').map((item) => +item);
const inputEx = input[1].split(' ').map((item) => +item);

solution(newInput[0], newInput[1], inputEx);

function solution(N, X, A) {
  let answer = '';
  for (let i = 0; i <= N; i++) {
    if (X > A[i]) {
      answer += A[i] + ' ';
    }
  }
  console.log(answer);
}
