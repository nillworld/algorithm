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
