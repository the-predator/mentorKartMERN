const obj = {height: 167, weight:55};

const height = 182;
const weight = 85;

console.log(obj);
obj.height = height;
obj.weight = weight;

console.log(obj);

const obj1 = { height, weight } // es6
console.log(obj1)

const ob2 = { height : height, weight : weight } // traditional
console.log(ob2)

const arr = [2, 3, 2, 4] 
const oth = arr[0]
const fst = arr[1]
const snd = arr[2]
const thd = arr[3]
arr.forEach((el, ind, a)=>{
    console.log(ind+"th : "+a[ind]);
 })
const [first, second, third, fourth] = arr
console.log("0th : "+arr[0]+" first : "+first);
console.log("1th : "+arr[1]+" second : "+second);
console.log("2th : "+arr[2]+" third : "+third);
console.log("3th : "+arr[3]+" fourth : "+fourth);