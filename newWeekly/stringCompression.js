// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
function solution(s) {
  let answer = 0;
  for (let len = 1; len <= s.length; len++) {
    for (let i = 1; i <= parseInt(s.length / len); i++) {}
  }
  return answer;
}

///////////////////////////////////////////////////////////////////////////////////////////

function solution1(s) {
  if (s.length === 1) return 1;
  let min = 1000;
  for (let i = 1; i <= s.length / 2; i++) {
    let str1 = "";
    let str2 = "";
    let ans = "";
    let count = 1;
    for (let j = 0; j < s.length; j += i) {
      if (j === 0) {
        str1 = s.slice(j, j + i);
      } else {
        str2 = s.slice(j, j + i);
        if (str1 === str2) {
          count++;
          if (j + i === s.length) ans += `${count}${str1}`;
        } else {
          if (count > 1) {
            ans += `${count}${str1}`;
          } else {
            ans += str1;
          }
          count = 1;
          if (str1.length > str2.length) {
            ans += str2;
          }
          str1 = str2;
          if (j + i === s.length) ans += str2;
        }
      }
    }
    min = Math.min(ans.length, min);
  }
  return min;
}

///////////////////////////////////////////////////////////////////////////////////////////

const solution2 = (s) => {
  const range = [...Array(s.length)].map((_, i) => i + 1);
  return Math.min(...range.map((i) => compress(s, i).length));
};

const compress = (s, n) => {
  const make = ([a, l, c]) => `${a}${c > 1 ? c : ""}${l}`;
  return make(chunk(s, n).reduce(([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]), ["", "", 0]));
};

const chunk = (s, n) => (s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)]);

///////////////////////////////////////////////////////////////////////////////////////////

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
