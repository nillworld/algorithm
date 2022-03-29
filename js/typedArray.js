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
