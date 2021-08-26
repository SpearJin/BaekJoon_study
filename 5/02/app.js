const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input);

function solution(arr) {
  const answer = arr.reduce(
    (acc, cur, idx) => (acc.max > cur ? acc : { max: cur, idx: idx + 1 }),
    {
      max: Number.MIN_SAFE_INTEGER,
      idx: -1,
    }
  );
  console.log(answer.max + '\n' + answer.idx);
}
