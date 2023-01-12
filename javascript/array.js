const arr = ['abc','bcd','efg','jkl'];
            //0,  , 1   , 2   ,  3  
const zth = arr[0];
const len = arr.length;
console.log('zeroth element is '+ zth);
console.log('length of array '+arr.length);
for(let i=0; i<arr.length; i++)
    {
        console.log('pos -> '+ i +' element '+ arr[i]);
    }
    for(let i=0; i<arr.length; i++)
    {
        console.log('pos -> '+ i +' element '+ arr[i].toUpperCase());
    }
// here we go
  const arr3 = new Array();
  arr3.push(1);
  arr3.push(2);
  arr3.push(3);
  arr3.push(4);
  arr3.push(5);
  arr3.push(6);
  arr3.push(7);
  arr3.push(10);

  for(let n=0; n<arr3.length;n++)
    {
        console.log('n = '+arr3[n]);
    }
    //find index of 10
    for(let n=0; n<arr3.length; n++)
      {
        if(arr3[n]==10)
          {
            console.log('index of 10 is '+ n);
          }
      }
      function checker(n)
        {
      return n == 10;
        }
   for(let i = 0; i<arr3.length; i++)
      {
        console.log(arr3[i]);
      }
    console.log('index of 10 -> '+ arr3.findIndex(checker));
    console.log('index of 10 is-> '+ arr3.findIndex(n => {
      return n == 10;
    }));