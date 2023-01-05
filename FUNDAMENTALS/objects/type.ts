(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "flash",
    age: 13,
    powers: ["1", "2"],
    getName() {
      return this.name;
    },
  };

  let superman: Hero = {
    name: "adan",
    age: 33,
    powers: ["6", "7"],
  };

  console.log(flash.getName?.());

  console.log(superman);
})();
