// https://redbinalgorithm.tistory.com/663
// https://velog.io/@bigsaigon333/Javascript%EB%A1%9C-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A4%80%EB%B9%84%ED%95%98%EA%B8%B01-%EC%9E%85%EC%B6%9C%EB%A0%A5
// https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%94%A9-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%97%90%EC%84%9C-%EA%B0%80%EC%9E%A5-%EB%A7%8E%EC%9D%B4%ED%95%98%EB%8A%94-%EC%8B%A4%EC%88%98%EB%93%A4-a10df2c884c

// class Car {
//   constructor(type, year) {
//     console.log("this: ", this);
//     this.type = type;
//     this.year = year;
//     this.dsjfsf = "test";
//   }
// }

// function Car2(type, year) {
//   this.type = type;
//   this.year = year;
// }

// const c = new Car("test", 2015);
// console.log("c: ", c);
// let list = [];
// list.push(new Car("Volvo", 2016));
// list.push(new Car2("moning", 2020));

// console.log("list: ", list);
// /*
// list:  [
//   Car { type: 'Volvo', year: 2016 },
//   Car2 { type: 'moning', year: 2020 }
// ]
// */

// var cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "bmw", year: 310 },
//   { type: "BMW", year: 310 },
// ];

// var ret = cars.sort(function (a, b) {
//   return a.year - b.year;
// });

// console.log("cars: ", cars);
// /* cars:  [
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 },
//   { type: 'Volvo', year: 2016 }
// ] */

// // 대소문자 구분 sort() 대문자 먼저
// var characterSort = cars.sort(function (a, b) {
//   if (a.type > b.type) {
//     return 1;
//   }
//   if (a.type === b.type) {
//     return 0;
//   }
//   if (a.type < b.type) {
//     return -1;
//   }
// });
// console.log(characterSort);

// // 대소문자 구분없이 sort()
// var upper = cars.sort(function (a, b) {
//   const upperA = a.type.toUpperCase();
//   const upperB = b.type.toUpperCase();
//   if (upperA > upperB) {
//     return 1;
//   }
//   if (upperA === upperB) {
//     return 0;
//   }
//   if (upperA < upperB) {
//     return -1;
//   }
//   return upperA - upperB;
// });

// console.log(upper);

// /* ============================================================== */

// class Queue {
//   constructor() {
//     this._arr = [];
//   }

//   push(value) {
//     this._arr.push(value);
//   }

//   pop() {
//     this._arr.shift();
//   }

//   isEmpty() {
//     return this_arr.length === 0;
//   }
// }

// const queue = new Queue();
// queue.push("ee");
// console.log(queue);

// ///////성능 문제로 이슈있을 경우 아래와같은 원형 큐 로 변경합니다.

// class node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//   }

//   setNext(n) {
//     this.next = n;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this._size = 0;
//   }

//   push(node) {
//     if (this.head == null) {
//       this.head = node;
//     } else {
//       console.log(this.tail.next);
//       this.tail.next = node;
//     }
//     this._size++;
//     this.tail = node;
//   }

//   pop() {
//     if (this.head == null) return -1;

//     let returnNode = this.head;
//     if (this.head != this.tail) this.head = this.head.next;
//     else {
//       this.head = null;
//       this.tail = null;
//     }
//     this._size--;
//     return returnNode;
//   }

//   size() {
//     return this._size;
//   }
// }
// const queue = new Queue();
// queue.push("ee");
// queue.push("ee2");
// queue.push("ee3");
// console.log(queue);

// /* ============================================================== */

// // Basic usage example
// import Heap from "heap-js";

// const minHeap = new Heap();
// const maxHeap = new Heap(Heap.maxComparator);

// minHeap.init([5, 18, 1]);
// minHeap.push(2);
// console.log(minHeap.peek()); //> 1
// console.log(minHeap.pop()); //> 1
// console.log(minHeap.peek()); //> 2

// // Iterator
// maxHeap.init([3, 4, 1, 12, 8]);
// for (const value of maxHeap) {
//   console.log("Next top value is", value);
// }

// /////// 라이브러리 안되면 직접 구현

// const top = 0;
// const parent = (i) => ((i + 1) >>> 1) - 1;
// const left = (i) => (i << 1) + 1;
// const right = (i) => (i + 1) << 1;

// class PriorityQueue {
//   constructor(comparator = (a, b) => a > b) {
//     this._heap = [];
//     this._comparator = comparator;
//   }
//   size() {
//     return this._heap.length;
//   }
//   isEmpty() {
//     return this.size() == 0;
//   }
//   peek() {
//     return this._heap[top];
//   }
//   push(...values) {
//     values.forEach((value) => {
//       this._heap.push(value);
//       this._siftUp();
//     });
//     return this.size();
//   }
//   pop() {
//     const poppedValue = this.peek();
//     const bottom = this.size() - 1;
//     if (bottom > top) {
//       this._swap(top, bottom);
//     }
//     this._heap.pop();
//     this._siftDown();
//     return poppedValue;
//   }
//   replace(value) {
//     const replacedValue = this.peek();
//     this._heap[top] = value;
//     this._siftDown();
//     return replacedValue;
//   }
//   _greater(i, j) {
//     return this._comparator(this._heap[i], this._heap[j]);
//   }
//   _swap(i, j) {
//     [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
//   }
//   _siftUp() {
//     let node = this.size() - 1;
//     while (node > top && this._greater(node, parent(node))) {
//       this._swap(node, parent(node));
//       node = parent(node);
//     }
//   }
//   _siftDown() {
//     let node = top;
//     while (
//       (left(node) < this.size() && this._greater(left(node), node)) ||
//       (right(node) < this.size() && this._greater(right(node), node))
//     ) {
//       let maxChild =
//         right(node) < this.size() && this._greater(right(node), left(node))
//           ? right(node)
//           : left(node);
//       this._swap(node, maxChild);
//       node = maxChild;
//     }
//   }
// }

// //

// {
//   const top = 0,
//     parent = (c) => ((c + 1) >>> 1) - 1,
//     left = (c) => (c << 1) + 1,
//     right = (c) => (c + 1) << 1;
//   class PriorityQueue {
//     constructor(c = (d, e) => d > e) {
//       (this._heap = []), (this._comparator = c);
//     }
//     size() {
//       return this._heap.length;
//     }
//     isEmpty() {
//       return 0 == this.size();
//     }
//     peek() {
//       return this._heap[top];
//     }
//     push(...c) {
//       return (
//         c.forEach((d) => {
//           this._heap.push(d), this._siftUp();
//         }),
//         this.size()
//       );
//     }
//     pop() {
//       const c = this.peek(),
//         d = this.size() - 1;
//       return (
//         d > top && this._swap(top, d), this._heap.pop(), this._siftDown(), c
//       );
//     }
//     replace(c) {
//       const d = this.peek();
//       return (this._heap[top] = c), this._siftDown(), d;
//     }
//     _greater(c, d) {
//       return this._comparator(this._heap[c], this._heap[d]);
//     }
//     _swap(c, d) {
//       [this._heap[c], this._heap[d]] = [this._heap[d], this._heap[c]];
//     }
//     _siftUp() {
//       for (let c = this.size() - 1; c > top && this._greater(c, parent(c)); )
//         this._swap(c, parent(c)), (c = parent(c));
//     }
//     _siftDown() {
//       for (
//         let d, c = top;
//         (left(c) < this.size() && this._greater(left(c), c)) ||
//         (right(c) < this.size() && this._greater(right(c), c));

//       )
//         (d =
//           right(c) < this.size() && this._greater(right(c), left(c))
//             ? right(c)
//             : left(c)),
//           this._swap(c, d),
//           (c = d);
//     }
//   }
//   window.PriorityQueue = PriorityQueue;
// }

// // Default comparison semantics
// const queue = new PriorityQueue();
// queue.push(10, 20, 30, 40, 50);
// console.log("Top:", queue.peek()); //=> 50
// console.log("Size:", queue.size()); //=> 5
// console.log("Contents:");
// while (!queue.isEmpty()) {
//   console.log(queue.pop()); //=> 40, 30, 20, 10
// }

// // Pairwise comparison semantics
// const pairwiseQueue = new PriorityQueue((a, b) => a[1] > b[1]);
// pairwiseQueue.push(["low", 0], ["medium", 5], ["high", 10]);
// console.log("\nContents:");
// while (!pairwiseQueue.isEmpty()) {
//   console.log(pairwiseQueue.pop()[0]); //=> 'high', 'medium', 'low'
// }

// /* ============================================================== */

// let myMap = new Map();

// let keyString = "문자열";
// let keyObj = {};
// let keyFunc = function () {};

// // 값 설정
// myMap.set(keyString, "'문자열'과 관련된 값");
// myMap.set(keyObj, "keyObj와 관련된 값");
// myMap.set(keyFunc, "keyFunc와 관련된 값");

// myMap.size; // 3

// // getting the values
// myMap.get(keyString); // "'문자열'과 관련된 값"
// myMap.get(keyObj); // "keyObj와 관련된 값"
// myMap.get(keyFunc); // "keyFunc와 관련된 값"

// myMap.get("문자열"); // "'문자열'과 관련된 값"
// // keyString === '문자열'이기 때문
// myMap.get({}); // undefined, keyObj !== {}
// myMap.get(function () {}); // undefined, keyFunc !== function () {}

// let myMap = new Map();
// myMap.set(NaN, "not a number");

// myMap.get(NaN);
// // "not a number"

// let otherNaN = Number("foo");
// myMap.get(otherNaN);
// // "not a number"

// let myMap = new Map()
// myMap.set(0, 'zero')
// myMap.set(1, 'one')

// for (let [key, value] of myMap) {
//   console.log(key + ' = ' + value)
// }
// // 0 = zero
// // 1 = one

// for (let key of myMap.keys()) {
//   console.log(key)
// }
// // 0
// // 1

// for (let value of myMap.values()) {
//   console.log(value)
// }
// // zero
// // one

// for (let [key, value] of myMap.entries()) {
//   console.log(key + ' = ' + value)
// }
// // 0 = zero
// // 1 = one
