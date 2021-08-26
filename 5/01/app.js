const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[1].split(' ').map((item) => +item);

solution(input);

function solution(arr) {
  const min = arr.reduce((acc, cur) => (acc > cur ? cur : acc));
  const max = arr.reduce((acc, cur) => (acc > cur ? acc : cur));
  console.log(min, max);
}
