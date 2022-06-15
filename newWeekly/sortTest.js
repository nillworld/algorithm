const a = [1, 2, 3, 4];

a.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
});
console.log(a);

a.sort((b, a) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
});
console.log(a);
