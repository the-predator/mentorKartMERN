var a=10;
var b=20;
console.log("equality "+ (a==b));
console.log("not equals "+(a!=b));
//arithematic operators
console.log("addition "+(a+b));
console.log("subtraction "+(a-b))
console.log("multiplication "+(a*b))
console.log("divide "+(a/b));
console.log("modulo "+(a%b));
console.log("post inc "+(a++));
console.log("pre inc "+(++a));
console.log("exponent "+(a**b));
//bitwise operators
console.log("bitwise and "+(a & b));
console.log("bitwise or "+(a | b));
//shift operators
console.log("right shift "+(a << 1));
console.log("left shift "+(a >> 1));
//logical operators
console.log("logical And "+(10 && 0));
console.log("logical or "+(10 || 1));
//ternary operators
console.log("ternary operators : "+( 1?'success':'fail' ));

const nums = [1, 2, 3, 4, 6, 10];
console.log("realtion in: "+(a in nums));

const obj = {
    1 : 'abc',
    2 : 'acc',
    10 : 'xyz'
            }

console.log('relation object in: '+(a in obj));
const y = null;
console.log("?? : " + (y ?? 'Y is NULL'));

//date object
const dt = new Date();
console.log('Date Instance : ' + (dt instanceof Date));