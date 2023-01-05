(()=>{

  const numbers:(string|number|boolean)[]=[1,2,3,'4'];

  numbers.push(true);
  console.log(numbers)

  numbers.forEach((value)=>console.log(value))

})()