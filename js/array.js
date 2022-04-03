// https://poiemaweb.com/js-array-is-not-arrray
// js배열은 배열이 아니다 (해쉬 테이블?!)
// https://evan-moon.github.io/2019/06/15/diving-into-js-array/
// 배열에 대한 js 엔진

function arrayObject() {
  console.log(Object.getOwnPropertyDescriptors([1, "E", "3"]));
  console.log(Object.getOwnPropertyDescriptors({ 0: 1, 1: "E", 2: "3" }));
}

/* ========================================================================== */

function bufferTest() {
  let buffer = new ArrayBuffer(8);
  let view = new Int32Array(buffer);
  view[0] = 100;
  console.log(buffer);
  console.log(view);
}

bufferTest();
/* ========================================================================== */

// Array의 Queue 구현
function arrayTest() {
  const array_1 = [1, 2, 5, 3, 2];
  array_1.push(8);
  console.log("array push: ", array_1); // [ 1, 2, 5, 3, 2, 8 ]
  array_1.pop();
  console.log("array pop: ", array_1); // [ 1, 2, 5, 3, 2 ]
  array_1.shift(); // O(n)
  console.log("array shift: ", array_1); // [ 2, 5, 3, 2 ]

  // const로 사용해도 push와 같은 함수가 적용되는데, 그 이유는
  // 객체를 상수로 선언(const)해도 메모리 값(주소 값)만 상수일 뿐
  // 그 객체안의 내용은 변경 가능하다. 그래서 JS에서 객체는 변수(let)로 선언할 이유가 없으며 거의 상수로 선언.

  // 상수로 선언된 객체의 Immutability(불변성)을 보장하기 위해 주로 Spread Operator(...Array)를 사용하여 Deep clone.
}

/* ========================================================================== */

function typedArray() {
  var LIMIT = 10000000;
  var buffer = new ArrayBuffer(LIMIT * 4);
  var arr = new Int32Array(buffer);
  console.time("ArrayBuffer insertion time");
  for (var i = 0; i < LIMIT; i++) {
    arr[i] = i;
  }
  console.time("ArrayBuffer read time");
  for (var i = 0; i < LIMIT; i++) {
    var p = arr[i];
  }
  console.log(arr);
  console.timeEnd("ArrayBuffer read time");
}
