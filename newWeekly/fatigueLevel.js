// https://programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

function solution(k, dungeons) {
  let answer = 0;
  let copiedDungeons = [...dungeons];
  let leftK = k;
  copiedDungeons.sort((a, b) => {
    if (a[0] - a[1] < b[0] - b[1]) return 1;
    if (a[0] - a[1] > b[0] - b[1]) return -1;
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    if (a[1] === b[1]) return 0;
  });
  console.log(copiedDungeons);
  for (const copiedDungeon of copiedDungeons) {
    if (copiedDungeon[0] <= leftK) {
      leftK -= copiedDungeon[1];
      answer += 1;
    }
  }
  return answer;
}

function solution2(k, dungeons) {
  // https://velog.io/@khw970421/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9C%84%ED%81%B4%EB%A6%AC%EC%B1%8C%EB%A6%B0%EC%A7%80-%ED%94%BC%EB%A1%9C%EB%8F%84
  // https://velog.io/@proshy/JS%EC%88%9C%EC%97%B4%EC%A1%B0%ED%95%A9%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4-%EA%B5%AC%ED%95%98%EA%B8%B0

  let answer = 0;
  let copiedDungeons = [...dungeons];
  // let leftK = k;

  const p = (arr, k, cnt) => {
    console.log(arr);
    let maxCnt = cnt;
    let leftK = k;
    for (const a of arr) {
      if (a[0] <= leftK) {
        leftK -= a[1];
        maxCnt += 1;
        if (arr.length > 1) Math.max(maxCnt, p(arr.splice(1), leftK, maxCnt));
      }
      maxCnt;
    }
    return maxCnt;
  };

  answer = p(dungeons, k, 0);

  // console.log(copiedDungeons);
  // for (const copiedDungeon of copiedDungeons) {
  //   if (copiedDungeon[0] <= leftK) {
  //     leftK -= copiedDungeon[1];
  //     answer += 1;
  //   }
  // }
  // return answer;
}

const k1 = 80;
const dungeons1 = [
  [80, 20],
  [50, 40],
  [30, 10],
  [70, 50],
  [30, 10],
];

console.log(solution2(k1, dungeons1));
