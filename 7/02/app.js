const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputArr = input[1].split('').map((item) => +item);

solution(+input[0], inputArr);

function solution(N, inputArr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += +inputArr[i];
  }
  console.log(sum);
}
