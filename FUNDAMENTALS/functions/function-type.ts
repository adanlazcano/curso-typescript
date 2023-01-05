(() => {
  const addNumber = (a: number, b: number) => a + b;
  const greet = (a: string)=> `Hola ${a}`;
  const saveTheWorld = () => `Hola Mundo`;

  let myFunction: (a:number,b:number)=> number

  myFunction = addNumber;

  console.log(myFunction(2, 3));

  // myFunction = greet;

  // console.log(myFunction("adan"));

  // myFunction = saveTheWorld;

  // console.log(myFunction());
})();
