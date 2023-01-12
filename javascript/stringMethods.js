let str ="hlw there";

console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.repeat(3));
console.log(str.split(''));
console.log(str.substring(1,5));
console.log(str.slice(1,5))

//if first arg is greater than second arg in substring they will get swappped it marks the negetive index as 0
//but in case of slice this isnt the case but it allows negetive indexes and counts from the end of the string

//content manipulation 
 
const mobs = 'abc,pqr,xyz,lam,rty';
//split method
const arr =  mobs.split(',');
console.log(arr);