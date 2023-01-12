const ages = [32, 33, 36, 40];
//every returns  true if all the elements  in the array follow the condition
console.log(ages.every(checkAge))

function checkAge(age) {
  return age > 18;
}
//some checks if any of the elements follow the condition
const ages2 = [32, 33, 16, 40, 13];
console.log(ages.some(checkAdult));
function checkAdult(age) {
  return age > 18;
}