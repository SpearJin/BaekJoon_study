const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], input[1]);

function solution(N, arr) {
  arr = arr.split(' ').map((item) => +item);
  const max = arr.reduce((acc, cur) => (acc > cur ? acc : cur));
  const newScore = arr
    .map((score) => (score / max) * 100)
    .reduce((acc, cur) => acc + cur);
  console.log(newScore / N);
}
