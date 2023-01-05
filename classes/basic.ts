(() => {
  class Person {
    static age: number = 35;
    static getAge(){
      return this.age
    }
    constructor(
      private name: string,
      public average: string,
      public nick: string
    ) {}

    bio(){
      return `${this.name} ${this.nick}`
    }
  }

  const doctor: Person = new Person("gloria", "100%", "gl");
  console.log(doctor);
  console.log(Person.age);
  console.log(doctor.bio())
  console.log(Person.getAge())
})();
