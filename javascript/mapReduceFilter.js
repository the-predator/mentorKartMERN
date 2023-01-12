//map
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);
console.log(map1);
//map functionality using foreach
const map2 = new Array();
array1.forEach(el => map2.push(el*2));
console.log(map2)

//filter
const arr = [1, 2, 3, 4 ,5 ,6 , 7, 8];
const result = arr.filter(el => el > 6);
console.log(result);
//filter functionality using foreach
const arr2 =  new Array();
arr.forEach((el)=>{
    if(el>6)arr2.push(el);
})
console.log(arr2);

//reduce
var newNumber = arr.reduce((acc, crr) =>{
    return acc+crr;
})
console.log(newNumber);
//reduce functionality using foreach
var newNumber2 = 0;
    arr.forEach((el) => newNumber2 += el);
console.log(newNumber2);