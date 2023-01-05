(() => {
  const hero: string = "flash";

  function returnName(): string {
    return hero;
  }

  const activateBatman = (): string => {
    return "activate";
  };

  const returnHero: string = returnName();

  console.log(returnHero);

  console.log(typeof activateBatman);
})();
