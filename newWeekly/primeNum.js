// https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

function solution(numbers) {
  let answer = 0;
  let allNum = new Set();

  const getAllNum = (numArray, n, makingNum) => {
    for (const i in numArray) {
      let copyArray = [...numArray];
      makingNum += copyArray[i];
      // n++;
      console.log("n: ", n);
      copyArray.splice(i, 1);
      if (makingNum.length >= n) {
        allNum.add(parseInt(makingNum));
      } else {
        getAllNum(copyArray, n, makingNum);
      }
    }

    // numArray.forEach((k, i, array) => {
    //   let copyArray = [...array];
    //   makingNum += k;
    //   n++;
    //   copyArray.splice(i, 1);
    //   if (makingNum.length >= n) {
    //     allNum.add(makingNum);
    //   } else {
    //     getAllNum(copyArray, n, makingNum);
    //   }
    // });
  };

  for (const i in numbers) {
    console.log(i);
    getAllNum(numbers, parseInt(i) + 1, 0);
    console.log(allNum);
  }

  return answer;
}

const numbers1 = "17";
const numbers2 = "011";
console.log(solution(numbers1));
console.log(solution(numbers2));
