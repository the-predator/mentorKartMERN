//trditional way of function representation
     function mksqr(n)
     {
        console.log(this);//global object
         return n*n;
     }
     console.log(mksqr(10));
//anonymous function : a function having no name (anonymous function)
let ansqr = function(n)
            {
                return n*n;
            }
    console.log(ansqr(20));
//arrow function (doesnt event require the keyword function)
     let arrw1 = (n)=>{
                  console.log(this);//points towrds something else
                  return n*n;
     }
     console.log(arrw1(30))
//oneliner arrow (the function only returns a single line statement and has only one agrument)
     let arrw2 = n => n*n;
     console.log(arrw2(40));