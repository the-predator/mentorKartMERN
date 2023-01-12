const arr1 = [1, 3, 7, 8, 10, 1, 3 ]
for(let n = 0; n < arr1.length; n++) {
    console.log('n = '+ arr1[n])
}
// find out index of 10 
for(let n = 0; n < arr1.length; n++) {
    if(arr1[n] == 10) {
        console.log('Index of 10 is '+ n)
        return
    }
}

var arr2 = new Array()
arr2.push(1)
arr2.push(10)
arr2.push(3)
arr2.push(7)
arr2.push(8)
arr2.push(1)
arr2.push(3)
arr2.push(null)
arr2.push(undefined)

function chkr(n) {
    return n == 10
}

//tradition function
const pos1 = arr2.findIndex(chkr)
//anonymous function
const pos2 = arr2.findIndex(function(n) {
    return n == 10
})
//oneliner arrow function
const pos3 = arr2.findIndex(n => n == 10)

console.log('Index of 10 is -> ' + pos1)
console.log('Index of 10 is -> ' + pos2)
console.log('Index of 10 is -> ' + pos3)