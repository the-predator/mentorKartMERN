const arr = [1, 2, 4, 1, 2, 4];
console.log(arr.includes(200));

const unqArr = arr.filter((el, ind, a) =>{
    var indOfCurrentItem = a.indexOf(el);
    return indOfCurrentItem == ind;
});
console.log(unqArr);