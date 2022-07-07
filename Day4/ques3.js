function conversion(num,from,to) {
  if (from === 'C' && to === 'F')
    {
      const temp = ((num * 9) / 5) + 32;
      return temp;
    }
  else if(from === 'F' && to === 'C')
   {
     const temp = ((num - 32) * 5) / 9;
     return temp;
   }
}

console.log(conversion(60,'C','F'));
console.log(conversion(45,'F','C'));
