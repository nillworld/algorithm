// https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let tempTrucks = [];
  tempTrucks.length = bridge_length;
  tempTrucks.fill(0);
  let tempWeight = 0;
  label1: for (w of truck_weights) {
    while (tempWeight + w > weight) {
      tempWeight -= tempTrucks[0];
      tempTrucks.shift();
      if (tempWeight + w > weight) {
        tempTrucks.push(0);
        answer += 1;
        console.log(tempTrucks, answer, "down");
      } else {
        tempTrucks.push(w);
        answer += 1;
        console.log(tempTrucks, answer, "down");
        continue label1;
      }
    }
    if (tempWeight + w <= weight) {
      tempWeight += w;
      tempTrucks.push(w);
      tempWeight -= tempTrucks[0];
      tempTrucks.shift();
      answer += 1;
      console.log(tempTrucks, answer, "down");
    }
  }
  answer += bridge_length;

  return answer;
}

let bridge_length1 = 2;
let bridge_length2 = 100;
let bridge_length3 = 100;
let weight1 = 10;
let weight2 = 100;
let weight3 = 100;
let truck_weights1 = [7, 4, 5, 6]; //8
let truck_weights2 = [10]; //101
let truck_weights3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; //110

console.log(solution(bridge_length1, weight1, truck_weights1));