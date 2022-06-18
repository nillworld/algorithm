let array1 = [3, 12, 31, 35, 2];
answer = [];
catchNum = 3;
const p = (arr, answer, catchNum) => {
  arr.forEach((a, i, array) => {
    // console.log(i);
    let test = [...array];
    let an = [...answer];
    if (catchNum > an.length) {
      an.push(a);

      test.splice(i, 1);
      p(test, an, catchNum);
    } else {
      console.log(an);
    }
  });
};

p(array1, answer, catchNum);
