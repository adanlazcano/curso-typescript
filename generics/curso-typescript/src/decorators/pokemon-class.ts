function printToConsole(constructor: Function): void {
  console.log(new Pokemon("dharma"));
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  }
  return () => {};
};

const blockPrototype = function (constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("the id must be between 1 to 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this)
        return "adan";
      },
      set(this,val) {
          console.log(this,val)
          Object.defineProperty(this,propertyKey,{
            value:val,
            writable:!isWritable,
            enumerable:false
          })
      },
    };

    return descriptor;
  };
}

@printToConsoleConditional(false)
@blockPrototype
export class Pokemon {
  @readOnly(false)
  public publicApi: string = "https://pokeapi.com";
  constructor(public name: string) {}
  @CheckValidPokemonId()
  savePokemon(id: number): void {
    console.log("object saved " + id);
  }
}
