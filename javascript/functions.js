function makeSquareAdTen(a){
    return (a*a)+10;
}

function dvdChk(rs)
  {
    let dvd = rs/45;
    const sts = (dvd>6)? 'normal':'bad data';
    console.log('status is '+ sts);
  }

  let num = makeSquareAdTen(prompt("enter a number"));
  dvdChk(num);