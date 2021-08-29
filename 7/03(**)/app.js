const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(S) {
  const newArray = Array(26).fill(-1);
  for (let i = 0; i < S.length; i++) {
    const nowChar = S[i];
    const nowNum = nowChar.charCodeAt() - 97;
    if (newArray[nowNum] === -1) {
      newArray[nowNum] = i;
    }
  }

  let answer = '';
  for (let i = 0; i < newArray.length; i++) {
    answer += newArray[i] + ' ';
  }
  console.log(answer);
}
