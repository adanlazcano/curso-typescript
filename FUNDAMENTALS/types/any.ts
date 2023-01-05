(() => {
  let batman: any = 123;

  batman = "batman";
  console.log((batman as string).charAt(0));
  batman = 3.1416;
  console.log(<number>batman.toFixed(2));
})();
