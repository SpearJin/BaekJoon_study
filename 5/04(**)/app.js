const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input);

function solution(arr) {
  const userNum = [];
  arr.forEach((item) => {
    const num = item % 42;
    if (userNum.indexOf(num) === -1) {
      userNum.push(num);
    }
  });
  console.log(userNum.length);
}
