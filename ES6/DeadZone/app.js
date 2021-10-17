// hoisting var(o) const(x) let(x)
console.log(a);
var a = "a";
// after hoisting
// var a;
// console.log(a);
// a = "a";
console.log(b);
const b = "b";
// not hoisting
console.log(c);
let c = "c";
// not hoisting too.
