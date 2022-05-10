// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  let answer = 1;
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
  answer = w * h - short * ratio;
  return answer;
}

let w1 = 8;
let h1 = 12;
console.log(solution(w1, h1));
