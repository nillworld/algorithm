// https://programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  var answer = 0;
  return answer;
}

const cacheSize1 = 3;
const cacheSize2 = 3;
const cacheSize3 = 2;
const cacheSize4 = 5;
const cacheSize5 = 2;
const cacheSize6 = 0;
const cities1 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
const cities2 = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"];
const cities3 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"];
const cities4 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"];
const cities5 = ["Jeju", "Pangyo", "NewYork", "newyork"];
const cities6 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

console.log(solution(cacheSize1, cities1));
console.log(solution(cacheSize2, cities2));
console.log(solution(cacheSize3, cities3));
console.log(solution(cacheSize4, cities4));
console.log(solution(cacheSize5, cities5));
console.log(solution(cacheSize6, cities6));
