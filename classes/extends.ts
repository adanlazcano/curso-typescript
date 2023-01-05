(() => {
  class Person {
    constructor(protected name: string, public nick: string) {
      console.log("constructor");
    }

    protected getFullName() {
      return `${this.name} ${this.nick}`;
    }
  }

  class Profession extends Person {
    constructor(name: string, nick: string, public graduated: boolean) {
      super(name, nick);
      console.log("constructor Profession");
    }

    set fullName (name:string){
      if(name.length < 3){
        throw new Error('the name must be at least 4 characteres')
      }
        this.name = name
    }
    get fullName():string{
      return `${this.name} (${this.nick})`
    }
    getFullNameProf() {
      console.log(super.getFullName());
    }
  }

  const doctor:Person = new Person("gloria", "gl");

  const engineer: Profession = new Profession("adan", "aa", true);

  console.log(doctor);
  console.log(engineer);

  engineer.getFullNameProf();

  engineer.fullName = 'arturo'
  console.log(engineer.fullName)
})();
