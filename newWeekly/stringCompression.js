// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
function solution(s) {
  let answer = 0;
  for (let len = 1; len <= s.length; len++) {
    for (let i = 1; i <= parseInt(s.length / len); i++) {
      if()
    }
  }
  return answer;
}

const s1 = "aabbaccc";
const s2 = "ababcdcdababcdcd";
const s3 = "abcabcdede";
const s4 = "abcabcabcabcdededededede";
const s5 = "xababcdcdababcdcd";
const s6 = "aaaaaaaaaaaabcd";
const s7 = "xxxxxxxxxxyyy";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
console.log(solution(s5));
console.log(solution(s6));
console.log(solution(s7));
