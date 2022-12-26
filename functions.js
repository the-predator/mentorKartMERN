//similar piece of code written togather which solves some problem
function makeSquareTen(a)// function functionName(functionParameters){function body}
               {
            return (a*a)+10;//function body
               }
console.log(makeSquareTen(5));
//result of above needs to be divided by 45 and check if >6 return normal otherwise return bad data
const sts = (makeSquareTen(5)/45)>6 ?'normal' :'bad data';
function dvdCheck(res)
   {
    dvd = res/45;
    return (dvd>6)?'normal':'bad data';
   }
console.log('status is: ' + dvdCheck(makeSquareTen(100)));
