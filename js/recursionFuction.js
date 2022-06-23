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

// p(array1, answer, catchNum);

let array2 = "ekres";
console.log(array2[1]);
// array2.forEach((k, i, arr) => {
//   let copy = [...arr];
//   console.log("k: ", k);
//   k = 0;
//   console.log(array1 === copy ? "같음" : "아님");
// });
