const arr = [1, 2, 4, 1, 2, 5]
//using for loop
console.log("Using for Loop")
for (let i = 0; i < arr.length; i++) {
    console.log(`index[${i}] : ${arr[i]}`);
}
//using for each
console.log("Using Foreach")
arr.forEach((el, ind) => console.log(`index[${ind}] : ${el}`));

// find index 
console.log('findIndex');
const ind = arr.findIndex( el => el == 1);
console.log(`Index ${ind}`);

// find
console.log('find');
const el = arr.find(el => el > 3)
console.log(`Element ${el}`)

//filter
console.log(`Filter`);
const els = arr.filter(el => el > 2);
console.log(els);

//map
console.log(`Map`)
// make a square of each element and return new array
const sqArr = arr.map( el => el * el )
console.log(sqArr)

// shift and unshift
console.log(`Unshift and Shift`)
const newArray1 = arr.unshift(56, 90)//inserts elements from the starting
console.log(arr)
console.log(newArray1)

const newArray2 = arr.shift()//pops the first element
console.log(arr)
console.log(newArray2)

console.log(`Slice and Splice`)
console.log('slice');
console.log(arr)
//returns copy of the original array and slices the original array from the index specified as argument
const slice1 = arr.slice(0, 5)
console.log(slice1)

//splice edits original array its first argument tells where to start and second argument tells how much items to remove
arr.splice(1,3);
console.log('splice');
console.log(arr);