const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(inputStr) {
  inputStr = inputStr.toUpperCase();
  let obj = {};
  for (let i = 0; i < inputStr.length; i++) {
    let nowChar = inputStr[i];
    if (obj[nowChar]) {
      obj[nowChar]++;
    } else {
      obj[nowChar] = 1;
    }
  }

  let maxValue = -1;
  let maxChar = '';
  let isDuplicated = true;

  for (const el in obj) {
    if (maxValue < obj[el]) {
      maxValue = obj[el];
      maxChar = el;
      isDuplicated = false;
    } else if (maxValue === obj[el]) {
      isDuplicated = true;
    }
  }

  if (isDuplicated) {
    console.log('?');
  } else {
    console.log(maxChar);
  }
}
