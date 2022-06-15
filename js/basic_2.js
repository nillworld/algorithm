// https://poiemaweb.com/js-array-is-not-arrray
// js배열은 배열이 아니다 (해쉬 테이블?!)
// https://evan-moon.github.io/2019/06/15/diving-into-js-array/
// 배열에 대한 js 엔진

/* ================================    1    ================================== */
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

/* ================================    2    ================================== */
// js에서 Int의 최대값과 최소값의 버무이

function minAndMaxSaveInt() {
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
  // js는 -(2^53 - 1)과 2^53 - 1 사이의 수만 안전하게 표현할 수 있음
  const min_1 = Number.MIN_SAFE_INTEGER;
  console.log("min_1: ", min_1); // -9007199254740991
  const min_2 = Number.MIN_SAFE_INTEGER - 1;
  console.log("min_2: ", min_2); // -9007199254740992
  const min_3 = Number.MIN_SAFE_INTEGER - 2;
  console.log("min_3: ", min_3); // -9007199254740992 // min_2 === min_3
  const max_1 = Number.MAX_SAFE_INTEGER;
  console.log("max_1: ", max_1); // 9007199254740991
  const max_2 = Number.MAX_SAFE_INTEGER + 1;
  console.log("max_2: ", max_2); // 9007199254740992
  const max_3 = Number.MAX_SAFE_INTEGER + 2;
  console.log("max_3: ", max_3); // 9007199254740992
  const max_4 = Number.MAX_SAFE_INTEGER - 2;
  const max_5 = Number.MAX_SAFE_INTEGER - 1;
  console.log(max_4, max_5); // 9007199254740989 9007199254740990
  console.log(9007199254740991 + 1 === 9007199254740991 + 2); // true;
}

/* ================================    3    ================================== */

// https://im-developer.tistory.com/103
function sliceAndSplice() {
  const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(array_1.slice(1, 2)); // [2] / array_[1]에서 index[2]전까지
  console.log(array_1.slice(-2)); // [8, 9]
  console.log(array_1.slice(3)); // [4, 5, 6, 7, 8, 9]
  console.log(array_1); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] / slice는 원본은 수정 못함.

  console.log(array_1.splice(1, 2)); // [ 2, 3 ] / array_[1] 부터 2개
  console.log(array_1); // [ 1, 4, 5, 6, 7, 8, 9 ] / splice 되고 남은 배열
  console.log(array_1.splice(-1, 1)); // [ 9 ]
  console.log(array_1); // [ 1, 4, 5, 6, 7, 8 ]
  console.log(array_1.splice(2)); // [ 5, 6, 7, 8 ]
  console.log(array_1); // [ 1, 4 ]
  console.log(array_1.splice(-1, 1, "a", "b")); // [ 4 ]
  console.log(array_1); // [ 1, 'a', 'b' ]
}

sliceAndSplice();

/* ================================    4    ================================== */

function splitTest() {
  const string_1 = "Hello Mr My yesterday";
  console.log(string_1[0]); // "h"
  console.log(string_1.split(" ")); // [ 'hello', 'mr', 'my', 'yesterday' ]
  console.log(string_1.split(" ", 2)); // [ 'hello', 'mr' ] 리턴 배열 개수 2개로 제한.
  console.log(string_1); // hello mr my yesterday / 원본은 수정 못함.
}

/* ================================    5    ================================== */

function upperAndLower() {
  const num_1 = 2434;
  console.log(num_1.toString()); // 2434
  console.log(typeof num_1.toString()); // string
  console.log(typeof num_1); // number / 원본은 수정 못함.
  const string_1 = "Hello Mr My yesterday";
  console.log(string_1.toLowerCase()); // hello mr my yesterday
  console.log(string_1.toUpperCase()); // HELLO MR MY YESTERDAY
  console.log(string_1); // Hello Mr My yesterday / 원본은 수정 못함.
  for (let x of string_1)
    if (x === x.toUpperCase()) {
      console.log(x);
    }
  /* 
	H

	M

	M

	*/ // 대문자 체크. 이때 띄어쓰기(" ")도 나옴.
}

/* ================================    6    ================================== */

function substringAndSubstr() {
  const string_1 = "Hello Mr My yesterday";
  console.log(string_1.substring(1, 7)); // ello M
  console.log(string_1.substring(1)); // ello Mr My yesterday
  console.log(string_1.substring(-1, 3)); // Hel
}

/* ================================    7    ================================== */

function indexOfTest() {
  const string_1 = "Hello Mr My yesterday";
  console.log(string_1.indexOf("")); // 0
  console.log(string_1.indexOf(" ")); // 5
  console.log(string_1.indexOf("e")); // 1
  console.log(string_1.indexOf("k")); // -1
  const array_1 = [1, 2, 3, 4, 5];
  console.log(array_1.indexOf("")); // -1
  console.log(array_1.indexOf("3")); // -1
  console.log(array_1.indexOf(3)); // 2
}

/* ================================    8    ================================== */

function filterTest() {
  const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
  let invalidEntries = 0;
  function isNumber(obj) {
    return obj !== undefined && typeof obj === "number" && !isNaN(obj);
  }
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
  }
  const arrByID = arr.filter(filterByID);
  console.log("Filtered Array\n", arrByID); // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  console.log("Number of Invalid Entries = ", invalidEntries); // 5

  const arrTest = arr.filter((eachArr, i) => {
    return eachArr.id > 0 && i > 2;
  });
  console.log("??", arrTest); // [ { id: 3 }, { id: 12.2 } ]
}

/* ================================    9    ================================== */

function classTest() {
  class Test4 {
    constructor(index_a, index_b) {
      this.a = index_a;
      this.b = index_b;
    }
  }
  let test = new Test4(3, 5);
  console.log(test.b); // 5
}

/* ================================    10    ================================== */

function sortTest() {
  const cars = [
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
    { type: "Volvo", year: 2016 },
  ];

  const cars_copy = [...cars]; // sort는 원본이 수정되므로 spread 문법으로 복사.

  const characterSort = cars_copy.sort(function (a, b) {
    if (a.type > b.type) {
      return 1;
    }
    if (a.type === b.type) {
      return 0;
    }
    if (a.type < b.type) {
      return -1;
    }
  });
  console.log(cars); // spread 문법을 이용해서 원본은 그대로.
  console.log(cars_copy); // sort적용됨.
  console.log(characterSort); // type에 관해 오름차순. 대소문자 구분-유니코드 순(구분 없을려면 toUpperCase)

  const arr_1 = [1, 2, 3, 4, 1];
  arr_1.reverse(); // [ 1, 4, 3, 2, 1 ] / 원본을 순서 바꿈.
  console.log(arr_1);
}

/* ================================    11    ================================== */

function fillTest() {
  console.log([1, 3, 5].fill(0)); // [ 0, 0, 0 ]
  const arr_1 = new Array(5).fill(0);
  console.log(arr_1); //  [0,0,0,0,0];
  const arr_2 = [1, 2, 3, 5, 6, 100];
  arr_2.fill((a) => (a > 5 ? 5 : a)); // XXXXXXXXXXXXXXX
  console.log(arr_2); // [Function (anonymous)] 자체로 들어감.
}

/* ================================    12    ================================== */

function maxAndMin() {
  console.log(Math.max(1, 3, 5, 2)); // 5
  const arr_1 = [1, 2, 3, 4, 100, 20];
  console.log(Math.max(...arr_1)); // 100 / '[1, 2]' 이런 형태가 아닌 '1, 2' 이런 형태
  console.log(Math.max(arr_1)); // NaN / 배열로 들어가면 안되는 듯.
  console.log(...arr_1); // 1 2 3 4 100 20
  console.log([...arr_1]); // [ 1, 2, 3, 4, 100, 20 ]
  console.log(Math.min(...arr_1)); //
}

/* ================================    13    ================================== */

function joinTest() {
  const arr_1 = [1, 4, 5, 2];
  console.log(arr_1.join("e")); // 1e4e5e2
  const str_1 = ["hi"];
  console.log(str_1.join("e")); // hi
  const str_2 = ["hi", "I'm", "Nill"];
  console.log(str_2.join(" ")); // hi I'm Nill
  console.log(str_2); // [ 'hi', "I'm", 'Nill' ] / 원본은 안바뀜.
}

/* ================================    14    ================================== */

function isNaNTest() {
  const str_1 = "hi";
  // isNan: 숫자인것만 false
  console.log(isNaN(str_1)); // true
  const str_2 = "1";
  console.log(isNaN(str_2), typeof str_2); // false / 타입이 string이더라도 숫자로 봄.
  const num_1 = 1;
  console.log(isNaN(num_1)); // false
  const arr_1 = ["hi"];
  console.log(isNaN(arr_1)); // true
  const arr_2 = ["hi", "h2"];
  console.log(isNaN(arr_2)); // true
  const arr_3 = ["hi", "h2", 3];
  console.log(isNaN(arr_3)); // true
  const arr_4 = [1, 3, 3];
  console.log(isNaN(arr_4)); // true
}

/* ================================    15    ================================== */

function parseIntTest() {
  const str_1 = "100";
  const num_1 = parseInt(str_1, 2); // 2진수를 int로 바꿔 리턴.
  console.log(str_1, isNaN(str_1), typeof str_1); // 100 false string / 원본 그대로
  console.log(num_1, isNaN(num_1), typeof num_1); // 4 false number
  const str_2 = "0x100";
  const num_2 = parseInt(str_2); // 2진수를 int로 바꿔 리턴. / 0x로 시작하면 16진수로 읽음
  console.log(num_2, isNaN(num_2), typeof num_2); // 256 false number
  const str_3 = "3.7";
  const num_3 = parseFloat(str_3);
  const num_4 = parseInt(str_3);
  console.log(num_3, isNaN(num_3), typeof num_3); // 3.7 false number
  console.log(num_4, isNaN(num_4), typeof num_4); // 3 false number / 소수점 버림.
  const num_5 = 100;
  const newNum_5 = num_5.toFixed(3);
  console.log(newNum_5); // 100.000 / 원본 안 바뀜.
  const num_6 = 100.6;
  const newNum_6 = num_6.toFixed(0);
  console.log(newNum_6); // 101 / 반올림.
}

/* ================================    16    ================================== */

function mapTest() {
  const map_1 = new Map();
  map_1.set("id", 1);
  console.log(map_1); // Map(1) { 'id' => 1 }
  map_1.id = 2;
  console.log(map_1); // Map(1) { 'id' => 1, id: 2 }
  map_1.set("id", 3);
  console.log(map_1); // Map(1) { 'id' => 3, id: 2 }
  map_1.id = 4;
  console.log(map_1); // Map(1) { 'id' => 3, id: 4 }
  map_1.set("id_2", 2);
  console.log(map_1); // Map(1) { 'id' => 3, 'id_2' => 2, id: 4 }
  console.log(map_1.get("id")); // 3
  console.log(map_1.id); // 4
  console.log(map_1.has("id_3")); // false
  for (let [key, value] of map_1) {
    console.log(key, value); // id 3 / id_2 2
  }
}
// mapTest();
