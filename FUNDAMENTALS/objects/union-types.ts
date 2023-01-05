(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let custom: string | number | Hero = "adan";

  console.log(typeof custom);

  custom = 23;

  console.log(typeof custom);

 custom = {
    name: "adan",
    powers: ["1", "2"],
    getName() {
      return 's';
    }
  };

  console.log(typeof custom);
  console.log(custom.getName?.());
})();
