solution();

function d(num) {
  const strNum = String(num);
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  return num + sum;
}

function solution() {
  const newArray = Array(10000).fill(0);
  for (let i = 1; i < 10000; i++) {
    const num = d(i);
    if (num <= 10000) {
      newArray[num]++;
    }
  }

  for (let i = 1; i < 10000; i++) {
    if (newArray[i] === 0) {
      console.log(i);
    }
  }
}
