// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  let answer = BigInt(0);
  let long = 0;
  let short = 0;
  if (w >= h) {
    long = w;
    short = h;
  } else {
    long = h;
    short = w;
  }
  let ratio = Math.ceil(long / short);
  answer = BigInt(w) * BigInt(h) - BigInt(short * ratio);

  return answer.toString() * 1;
}

let w1 = 1000000000;
let h1 = 999999999;

console.log(w1 * h1 - 2 * h1);
console.log(solution(w1, h1));
