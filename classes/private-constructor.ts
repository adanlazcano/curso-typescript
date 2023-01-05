(() => {
  class Apocalipse {
    static instance: Apocalipse;

    private constructor(public name: string) {}

    static callApocalipse(param: string): Apocalipse {
      if (!Apocalipse.instance) {
        Apocalipse.instance = new Apocalipse("Terrifier " + param);
      }
      return Apocalipse.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipse1 = Apocalipse.callApocalipse("1");
  const apocalipse2 = Apocalipse.callApocalipse("2");
  const apocalipse3 = Apocalipse.callApocalipse("3");

  console.log([apocalipse1.name, apocalipse2.name, apocalipse3.name]);

  apocalipse1.changeName("Apo");
  console.log([apocalipse1.name, apocalipse2.name, apocalipse3.name]);
})();
