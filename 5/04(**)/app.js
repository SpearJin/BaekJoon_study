const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input);

function solution(num) {
  const newArray = Array(42).fill(0);
  let cnt = 0;
  for (let i = 0; i < num.length; i++) {
    const value = num[i] % 42;
    newArray[value]++;
  }
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] !== 0) {
      cnt++;
    }
  }
  console.log(cnt);
}
