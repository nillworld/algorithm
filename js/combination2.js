let array = [1, 2, 3, 4];
let num = 2;
const combi = (array, num) => {
  let a = [];
  array.forEach((fixed, i) => {
    a.push(fixed);
    // if (num >= 1) {
    //   combi(array, num - 1);
    // }
  });
  return answer;
};

const answer = combi(array, num);

/////////////////////////////////

const combination = (array, stack, num) => {
  let answer = [];
  array.forEach((el) => {
    if (num > 1) {
      if (el in stack) {
      } else {
        stack.push(el);
      }
      answer.push(combination(array, stack, num - 1));
    } else if (num === 1) {
      if (el in stack) {
      } else {
        stack.push(el);
      }
      answer.push(stack);
    }
  });
  return answer;
};

const getCombinations = (arr, num) => {
  const result = [];
  arr.forEach((el, i, array) => {
    const rest = array.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
  });
  return result;
};

console.log(answer);
// console.log(combination(array, [], 2));
