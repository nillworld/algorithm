// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  var answer = 0;
  answer = fibonacci(n);
  return answer;
}

function fibonacci(n) {
  if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 1 + fibonacci(2);
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

let n1 = 3;
let n2 = 5;

console.log(solution(n1)); // 2
console.log(solution(n2)); // 5

// ==========================================================

function solution2(n) {
  var answer = 0;
  answer = fibonacci(n);
  return answer;
}

let fiboMemo = {}

function fibonacci2(n) {
  if()
  if (n === 2) {
    return 1;
  } else if (n === 3) {
    return 1 + fibonacci2(2);
  } else {
    return fibonacci2(n - 2) + fibonacci2(n - 1);
  }
}
