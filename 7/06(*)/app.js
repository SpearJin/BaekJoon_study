const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
  const strArray = str.split(' ');
  let answer = 0;
  for (let i = 0; i < strArray.length; i++) {
    const nowWord = strArray[i];
    if (nowWord.length !== 0) {
      answer++;
    }
  }
  console.log(answer);
}
