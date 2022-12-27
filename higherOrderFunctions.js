//if one function can accept or return another funtion is called higher order function
function avgSum1()
        {
       return function(){
     console.log("this is the inner function");
       }
        }
function avgSum2(sm){
     sm();
}
const avg1 = avgSum1();
console.log(avg1);
avg1();

const calcDelta = () => {
    console.log("higher order funtions");
};
avgSum2(calcDelta);