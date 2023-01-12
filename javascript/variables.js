//var keyword has global scope
var x = 5;
var y = 6;
var z = x + y;
console.log(`${x} + ${y} = ${z}`);

//let has  local scope 
let p = 5;
let q = 6;
let r = p + q;
console.log(`${p} + ${q} = ${r}`);

x = 5;
y = 6;
z = x + y;
console.log(`${x} + ${y} = ${z}`);

//const has global scope and it cannot be edited
const a = 5;
const b = 6;
let c = a + b;
console.log(`${a} + ${b} = ${c}`);
