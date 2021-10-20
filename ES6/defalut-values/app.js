// var is only function scope, Block Scope : const, let
if (true) {
  var a = "a";
}
console.log(a);
if (true) {
  let b = "b";
}
let b = "b";
console.log(b);
// good way
let c;
if (true) {
  c = "c";
}
console.log(c);
