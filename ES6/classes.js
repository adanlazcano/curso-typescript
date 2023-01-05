(() => {
  class Person {
    constructor(name, average) {
      this.name = name;
      this.average = average;
    }
  }

  const doctor = new Person("adan", 100);

  console.log(doctor);

  class Doctor extends Person {
    constructor(name, average, speciality) {
      super(name, average);
      this.speciality = speciality;
    }
  }

  const doc = new Doctor("gloria", 200, "surgery");

  console.log(doc);
})();
