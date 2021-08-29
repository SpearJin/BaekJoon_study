const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

console.log(input);
solution(input[0], input[1]);

function solution(A, B) {
  A = +String(A).split('').reverse().join('');
  B = +String(B).split('').reverse().join('');
  if (A > B) {
    console.log(A);
  } else {
    console.log(B);
  }
}
