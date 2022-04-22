function makeFunc() {
  var name = "클로져 인자";
  console.log("밖의 콘솔");
  function displayName() {
    console.log(name);
  }
  return displayName;
}
// 신기하네..  "밖의 콘솔"은 변수에 담길때 호출 되는데,
// 클로져 인자 같은 경우에는 리턴으로 함수가 담기고 그 함수는 실행되지 않아서 그런지
// 단순히 변수에 담을때는 호출 안되고 변수를 실행해야 호출되네...

let myFunc = makeFunc();
let myFunc2 = makeFunc();
//myFunc변수에 displayName을 리턴함
//유효범위의 어휘적 환경을 유지
myFunc();
myFunc();
myFunc();
//리턴된 displayName 함수를 실행(name 변수에 접근)

function test() {
  console.log("hihihii");
}
let ee = test();
let rr = test();
