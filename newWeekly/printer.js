// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let answer = 0;
  let sortedPriorities = [...priorities];
  let printingOrder = new Array(priorities.length).fill(0);
  let printMap = [];
  let cnt = 1;
  for (const i in priorities) {
    printMap[i] = { key: parseInt(i), priority: priorities[i] };
  }
  // console.log(printingOrder);
  sortedPriorities.sort((a, b) => b - a);
  while (printMap[0]) {
    if (printMap[0].priority === sortedPriorities[0]) {
      sortedPriorities.splice(0, 1);
      printingOrder[printMap[0].key] = cnt;
      cnt++;
      printMap.splice(0, 1);
    } else {
      printMap.push(printMap[0]);
      printMap.splice(0, 1);
    }
  }
  answer = printingOrder[location];
  return answer;
}

let priorities1 = [2, 1, 3, 2];
let priorities2 = [1, 1, 9, 1, 1, 1];
let location1 = 2;
let location2 = 0;

console.log(solution(priorities1, location1)); // 1
console.log(solution(priorities2, location2)); // 5
