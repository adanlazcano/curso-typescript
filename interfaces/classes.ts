(() => {
  interface Client {
    name: string;
    age: number;
    getProducts(id: number):string;
  }

  interface Products{
    list:string[]
  }

  class Sucursal implements Client,Products {
    public name:string=''
    public age:number=0
    public list:string[]=[]

    getProducts(id: number): string {
      return 'adan'
    }

  }

  const client = new Sucursal()

  console.log(client.getProducts(1))

})();
