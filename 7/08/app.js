const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(word) {
  let answer = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= 'W') {
      answer += 10;
    } else if (word[i] >= 'T') {
      answer += 9;
    } else if (word[i] >= 'P') {
      answer += 8;
    } else if (word[i] >= 'M') {
      answer += 7;
    } else if (word[i] >= 'J') {
      answer += 6;
    } else if (word[i] >= 'G') {
      answer += 5;
    } else if (word[i] >= 'D') {
      answer += 4;
    } else if (word[i] >= 'A') {
      answer += 3;
    }
  }
  console.log(answer);
}
