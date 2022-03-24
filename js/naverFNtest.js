function solution(maps, p, r) {
  let answer = -1;

  for (let i = 0; i < maps.length + 1; i++) {
    for (let j = 0; j < maps[0].length + 1; j++) {
      const fullP = [];
      const halfP = [];
      for (let innerI = -r / 2; innerI < r / 2; innerI++) {
        for (let innerJ = -r / 2; innerJ < r / 2; innerJ++) {
          if (i + innerI >= 0 && j + innerJ >= 0 && i + innerI < maps.length && j + innerJ < maps[0].length) {
            if (innerI < 0 && innerJ < 0 && Math.abs(innerI) + Math.abs(innerJ) <= r / 2) {
              fullP.push([i + innerI, j + innerJ]);
            }
            if (innerI < 0 && innerJ >= 0 && Math.abs(innerI) + Math.abs(innerJ) < r / 2) {
              fullP.push([i + innerI, j + innerJ]);
            }
            if (innerI >= 0 && innerJ < 0 && Math.abs(innerI) + Math.abs(innerJ) < r / 2) {
              fullP.push([i + innerI, j + innerJ]);
            }
            if (innerI >= 0 && innerJ >= 0 && Math.abs(innerI) + Math.abs(innerJ) < r / 2 - 1) {
              fullP.push([i + innerI, j + innerJ]);
            }

            if (innerI < 0 && innerJ < 0 && Math.abs(innerI) + Math.abs(innerJ) === r / 2 + 1) {
              halfP.push([i + innerI, j + innerJ]);
            }
            if (innerI < 0 && innerJ >= 0 && Math.abs(innerI) + Math.abs(innerJ) === r / 2) {
              halfP.push([i + innerI, j + innerJ]);
            }
            if (innerI >= 0 && innerJ < 0 && Math.abs(innerI) + Math.abs(innerJ) === r / 2) {
              halfP.push([i + innerI, j + innerJ]);
            }
            if (innerI >= 0 && innerJ >= 0 && Math.abs(innerI) + Math.abs(innerJ) === r / 2 - 1) {
              halfP.push([i + innerI, j + innerJ]);
            }
          }
        }
      }
      console.log(halfP);
      // console.log(i, j);
      let temp = 0;

      for (let index in fullP) {
        if (maps[fullP[index][0]][fullP[index][1]] <= p) {
          temp += 1;
        }
      }
      for (let index in halfP) {
        if (maps[halfP[index][0]][halfP[index][1]] <= p) {
          temp += 1;
        }
      }
      if (temp > answer) {
        answer = temp;
      }
    }
  }
  return answer;
}

maps1 = [
  [1, 28, 41, 22, 25, 79, 4],
  [39, 20, 10, 17, 19, 18, 8],
  [21, 4, 13, 12, 9, 29, 19],
  [58, 1, 20, 5, 8, 16, 9],
  [5, 6, 15, 2, 39, 8, 29],
  [39, 7, 17, 5, 4, 49, 5],
  [74, 46, 8, 11, 25, 2, 11],
];
maps2 = [
  [47, 8, 99, 9, 85, 3, 8],
  [90, 93, 8, 25, 98, 15, 97],
  [9, 95, 91, 87, 8, 81, 9],
  [98, 88, 82, 89, 79, 81, 97],
  [97, 35, 31, 97, 81, 2, 92],
  [32, 16, 49, 9, 91, 89, 17],
  [53, 6, 35, 12, 13, 98, 5],
];
maps3 = [
  [9, 8, 17, 55, 19, 7],
  [1, 25, 5, 39, 28, 8],
  [88, 19, 28, 3, 2, 9],
  [76, 73, 7, 18, 16, 14],
  [99, 8, 8, 7, 11, 9],
  [1, 18, 4, 10, 3, 6],
];
maps4 = [
  [6, 3, 2, 7, 3],
  [7, 2, 1, 6, 8],
  [8, 9, 8, 4, 9],
  [7, 9, 2, 7, 1],
  [6, 3, 6, 8, 4],
];
p1 = 19;
p2 = 78;
p3 = 16;
p4 = 5;
r1 = 6;
r2 = 6;
r3 = 4;
r4 = 2;
console.log(solution(maps1, p1, r1)); //17
// console.log(solution(maps2, p2, r2)); //11
// console.log(solution(maps3, p3, r3)); //8
// console.log(solution(maps4, p4, r4)); //3
