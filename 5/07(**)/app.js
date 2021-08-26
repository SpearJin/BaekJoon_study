const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrLength = +input[0];
const inputArray = [];
for (let i = 1; i <= arrLength; i++) {
  const arr = input[i].split(' ').map((item) => +item);
  inputArray.push({
    N: arr[0],
    arr: arr.slice(1),
  });
}

soltuion(arrLength, inputArray);

function soltuion(C, inputArray) {
  for (let i = 0; i < C; i++) {
    const item = inputArray[i];
    let average = 0;
    for (let j = 0; j < item.N; j++) {
      average += item.arr[j];
    }
    average /= item.N;

    let cnt = 0;
    for (let k = 0; k < item.N; k++) {
      if (average < item.arr[k]) {
        cnt++;
      }
    }

    const answer = ((cnt / item.N) * 100).toFixed(3);
    console.log(answer + '%');
  }
}
