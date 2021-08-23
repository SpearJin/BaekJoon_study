const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 0; i < input.length; i++) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(testCaseArray);

function solution(array) {
  let checked = true;
  let i = 0;
  let answer = '';
  while (checked) {
    A = array[i].A;
    B = array[i].B;
    i++;
    if (A === 0 && B === 0) {
      break;
    }
    answer += A + B + '\n';
  }
  console.log(answer);
}
