// Array DS
const arr = [1, 2, 4, 1, 2, 4];
console.log(arr.includes(200));

//filter method filters elements if they satisfy the condition
//the following function removes  the duplicate items from an array
const unqArr = arr.filter((el, ind, a) =>{
    var indOfCurrentItem = a.indexOf(el);
    return indOfCurrentItem == ind;
});
console.log(unqArr);