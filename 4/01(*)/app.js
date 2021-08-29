const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 0; i < input.length; i++) {
  const testValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({
    A: testValue[0],
    B: testValue[1],
  });
}

solution(testCaseArray);

function solution(array) {
  let answer = '';
  let i = 0;
  while (true) {
    let A = array[i].A;
    let B = array[i].B;
    i++;
    if (A === 0 && B === 0) {
      break;
    }
    answer += A + B + '\n';
  }
  console.log(answer);
}
