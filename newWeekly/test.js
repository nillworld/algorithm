let array = [3, 2, 1, 3, 2];
answer = [];
catchNum = 3;
const p = (arr, answer, catchNum) => {
  arr.forEach((a, i, array) => {
    console.log(array, answer);
    if (catchNum > answer.length) {
      answer.push(a);
      array.splice(i, 1);
      p(array, answer, catchNum);
    } else {
    }
  });
};

p(array, answer, catchNum);
