const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 0; i <= +input[0]; i++) {
  const testValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: testValue[0], B: testValue[1] });
}

solution(+input[0], testCaseArray);

function solution(T, testCaseArray) {
  for (let i = 1; i <= T; i++) {
    A = testCaseArray[i].A;
    B = testCaseArray[i].B;
    console.log(A + B);
  }
}
