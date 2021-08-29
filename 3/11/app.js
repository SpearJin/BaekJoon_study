const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0], input[1]);

function solution(arr, arr2) {
  arr = arr.split(' ');
  const N = +arr[0];
  const X = +arr[1];
  const newarray = arr2.split(' ').map((item) => +item);
  let answer = '';
  for (let i = 0; i < N; i++) {
    if (newarray[i] < X) {
      answer += newarray[i] + ' ';
    }
  }
  console.log(answer);
}
