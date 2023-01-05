(() => {
  type Powers = number;

  type Person = {
    nick: string;
    surname: string;
    power: Powers[];
    active: boolean;
  };

  const person: Person = {
    nick: "adan",
    surname: "lazcano",
    power: [5004.245, 5445],
    active: true,
  };

  const { nick, surname } = person;

  const printPerson = ({ power, ...rest }: Person): void =>
    console.log(power[0].toFixed(2), rest);

  console.log(nick.toUpperCase(), surname);

  printPerson(person);

  const arrPerson: [string, string, boolean] = ["adan", "arturo", true];

  const [, arturo, status] = arrPerson;

  console.log(arturo, status);
})();
