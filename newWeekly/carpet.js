// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
  let answer = [];
  // yellow 가로 세로 합
  for (let i = 1; i < (brown - 4) / 2; i++) {
    if (i * ((brown - 4) / 2 - i) === yellow) {
      answer[1] = i + 2;
      answer[0] = (brown - 4) / 2 - i + 2;
      break;
    }
  }

  return answer;
}

brown1 = 10;
yellow1 = 2;
brown2 = 8;
yellow2 = 1;
brown3 = 24;
yellow3 = 24;

console.log(solution(brown1, yellow1));
console.log(solution(brown2, yellow2));
console.log(solution(brown3, yellow3));
