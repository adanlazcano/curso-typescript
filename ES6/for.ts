(() => {
  type Habilites = number;

  type Person = {
    name: string;
    surName: string;
    habilities: Habilites;
  };

  const doctor: Person = {
    name: "gloria",
    surName: "lazcano",
    habilities: 100,
  };
  const houseWive: Person = {
    name: "magaly",
    surName: "solorzano",
    habilities: 43,
  };
  const engineer: Person = {
    name: "arturo",
    surName: "sanchez",
    habilities: 47,
  };

  const persons:Person[] = [doctor, houseWive, engineer];

  for (const person of persons) {
    console.log(person.habilities);
  }
})();
