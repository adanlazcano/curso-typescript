(() => {
  let flash: {
    name: string;
    age: number;
    powers?: string[];
    getName?: () => string;
  } 
  
  flash = {
    name: "adan",
    age: 33,
     powers: ["1", "2"],
    getName() {
      return this.name;
    },
  };
    console.log(flash)
  console.log(flash.getName?.());
})()
