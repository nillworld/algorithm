// https://programmers.co.kr/learn/courses/30/lessons/12913
function solution_before(land) {
  var answer = 0;
  let arr = land.flat();
  arr.sort((a, b) => b - a);
  let tops = arr.slice(0, land.length);
  console.log(tops);

  for (let firstCheckNum of tops) {
    console.log(firstCheckNum);
  }

  for (let i = 0; i < land.length; i++) {
    let land_line = land[i];
    let temp_top = 0;
    let temp_top_i = 0;
    // for (let j = 0; j < 4; j++) {
    //   if (temp_top <= tem) {
    //   }
    // }
  }

  // land_line에서 가장 큰수랑 두번째로 큰수 차이가 나는 라인을 먼저 잡고.
  // 그 위, 아래 라인의 해당 인덱스의 값을 0으로 초기화

  // 위 처럼 하면 두 수의 차가 1밖에 안나지만 그 수가 100에 가깝다면?...
  // 각 줄 마다 최대 값을 먼저 기준 잡아서 비교..?

  // 전체 배열에서 큰 순서대로 행의 수만큼 뽑아서
  // 이 중에서 하나를 뽑았을 때 나오는 최대값을 각각 구해서 이 중 최대값 뽑기.
  return answer;
}

// ---------------------------------------------------------

let land1 = [
  [1, 2, 3, 5],
  [1, 2, 5, 5],
  [5, 6, 8, 19], // 두번째로 큰 두 수의 차이 -11
  [4, 3, 2, 16], // 가장 큰 두 수의 차이 -12
];
let land2 = [
  [1, 2, 3, 5],
  [1, 2, 5, 5],
  [5, 6, 18, 19],
  [4, 3, 2, 16],
];
let land3 = [
  [1, 2, 3, 5],
  [1, 2, 5, 98],
  [5, 6, 97, 99],
  [4, 3, 2, 16],
];

console.log(solution(land1)); // 33
console.log(solution(land2)); // 44
