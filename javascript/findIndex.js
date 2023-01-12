const arr = [14, 13, 16, 18, 21, 44];
function  check(age){
    return age >18;
}
console.log('18+ is ' + arr.findIndex(check));
