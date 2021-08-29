const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrLenght = input[0];
const inputArray = [];
for (let i = 1; i <= arrLenght; i++) {
  const newInput = input[i].split(' ').map((item) => +item);
  inputArray.push({
    N: newInput[0],
    arr: newInput.slice(1),
  });
}

solution(arrLenght, inputArray);

function solution(C, inputArray) {
  for (let i = 0; i < C; i++) {
    let item = inputArray[i];
    const sum = item.arr.reduce((acc, cur) => acc + cur);
    const avergae = sum / item.N;

    let cnt = 0;
    for (let j = 0; j < item.N; j++) {
      if (avergae < item.arr[j]) {
        cnt++;
      }
    }
    const answer = ((cnt / item.N) * 100).toFixed(3);
    console.log(answer + '%');
  }
}
