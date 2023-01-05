(() => {
  abstract class Person {
    constructor(public name: string, public nick: string) {}

    get getName() {
      return this.name;
    }
  }

  class Doctor extends Person {
    getPatients(a:string):string{
      return a
    }
  }
  class Engineer extends Doctor {}

  const doctor: Doctor = new Doctor("gloria", "gl");
  const engineer: Engineer = new Doctor("adan", "aasl");

  console.log(doctor.getName);

  console.log(engineer.getPatients('mechanic'));

  const printName = (doctor:Person) =>{
    console.log(doctor.name)
  }

  printName(engineer)
})();
