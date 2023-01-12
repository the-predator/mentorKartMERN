//innerfunction  uses things of outer  function
function linearData() {//outerFunction
    const arr = [-3, -2, -1, 0, 1, 2, 3]
    function plotData() {//innerFunction
    console.log(arr);
    }
    plotData();
 }
linearData();