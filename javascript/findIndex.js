//the following function returns if the element is greater tham 18
const arr = [14, 13, 16, 18, 21, 44];
function  check(age){
    return age >18;
}
//findIndex returns the index of the value in the array that is being passed through
console.log('18+ is ' + arr.findIndex(check));
