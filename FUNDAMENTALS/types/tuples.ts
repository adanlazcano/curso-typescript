(() => {
  const hero: [string, number, boolean, undefined] = [
    "Dr",
    100,
    true,
    undefined,
  ];

  hero[0] = "iron";
  hero[1] = 2;
  hero[2] = false;
  console.log(hero);
})();
