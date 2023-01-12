function forLoop(){
    const n =10;
    var sum=0;
    for(let i=1; i<=n; i++)
       {
      sum +=i;
       }
    console.log(sum);
}
function whileLoop(){
    var sum = 1;
    while(sum<100){
        sum *=2;
    }
    console.log(sum);
}
function doWhileLoop(){
    var sum = 1;
    do{
      sum +=10;
    }while(false)
    console.log(sum);
}

forLoop();
whileLoop();
doWhileLoop();