// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  let answer = 1;
  let bigIntAnswer = BigInt(0);
  let long = 0;
  let short = 0;
  let maxM = 1;
  let partLinedSquare = 0;
  if (w >= h) {
    long = w;
    short = h;
  } else {
    long = h;
    short = w;
  }

  for (let i = short; i >= 2; i--) {
    if (long % i === 0) {
      maxM = i;
      break;
    }
  }

  let minLong = long / maxM;
  let minShort = short / maxM;
  let ratio = minLong / minShort;
  let floorRatio = Math.floor(minLong / minShort);
  if (ratio - floorRatio > 0.5) {
    partLinedSquare = (floorRatio + 2) * minShort - 2;
  } else if (ratio - floorRatio === 0) {
    partLinedSquare = floorRatio * minShort;
  } else {
    partLinedSquare = (floorRatio + 1) * minShort;
  }

  bigIntAnswer = BigInt(w) * BigInt(h) - BigInt(partLinedSquare * maxM);
  answer = bigIntAnswer.toString() * 1;
  return answer;
}

let w1 = 1;
let h1 = 1;

console.log(w1 * h1 - 2 * h1);
console.log(solution(w1, h1));
