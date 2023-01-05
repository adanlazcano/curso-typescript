(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbers: addTwoNumbers;

  addNumbers = (a: number, b: number) => {
    return a + b;
  };

  console.log(addNumbers(1, 2));
})();
