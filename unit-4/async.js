setTimeout(() => {
  console.log('a');
  console.log('b');
}, 100)
console.log("1");
console.log("2");
setTimeout(() => {
  console.log('x');
  console.log('y');
}, 0)
console.log("3");