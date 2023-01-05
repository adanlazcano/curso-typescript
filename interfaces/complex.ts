(() => {
  interface Client {
    name: string;
    age: number;
    address?: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "angela",
    age: 2,
    address: {
      id: 125,
      zip: "KY SU",
      city: "Ottawa",
    },
  };
  const client2: Client = {
    name: "adan",
    age: 42,
  };

  console.log(client);

  console.log(client2);
})();
