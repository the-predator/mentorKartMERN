//functions in js
// the following functions returns the square +10 of the number that is being passed
function makeSquareAdTen(a){
    return (a*a)+10;
}

// the following functions checks if the remainder is greater than 6 or not when divided by 45
function dvdChk(rs)
  {
    let dvd = rs/45;
    const sts = (dvd>6)? 'normal':'bad data';
    console.log('status is '+ sts);
  }
           // function call
  let num = makeSquareAdTen(prompt("enter a number"));
  //funtinon call
  dvdChk(num);