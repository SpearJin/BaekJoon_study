const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; i++) {
  const newArray = input[i].split(' ');
  testCaseArray.push({
    A: newArray[0],
    B: newArray[1],
  });
}

solution(+input[0], testCaseArray);

function solution(T, arr) {
  for (let i = 0; i < T; i++) {
    const A = +arr[i].A;
    const B = +arr[i].B;
    console.log(A + B);
  }
}
