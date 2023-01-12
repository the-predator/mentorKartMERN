function ifElse(){
    const temp =true;
    if(temp){
        console.log('condition true')
    }
    else{
        console.log('condition false')
    }
}
ifElse();
function ladderIfElse(){
    const age =22;
    if(age<20){
        console.log("too young");
    }
    else if(age>18 && age<50){
        console.log("eligible");
    }
    else{
        console.log("too old");
    }
}
ladderIfElse();

function nestedIfElse(){
    const marks = 92;
    if(marks <40)console.log('fail');
    else if(marks>40){
        if(marks>90)console.log('distinction');
        else if(marks>75 && marks<90)console.log('merit')
        else console.log('passed')
    }     
}
nestedIfElse();