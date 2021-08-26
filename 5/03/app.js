const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  let sum = A * B * C;
  sum = String(sum).split('');

  for (let i = 0; i < 10; i++) {
    let cnt = 0;
    for (let j = 0; j < sum.length; j++) {
      if (+sum[j] === i) {
        cnt++;
      }
    }
    console.log(cnt);
  }
}
