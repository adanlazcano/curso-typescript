(() => {
  const a: {
    name: string;
    year: number;
    status: true;
  }[] = [
    { name: "43", year: 121, status: true },
    { name: "43", year: 121, status: true },
  ];

  console.log(a);

  const b: {
    name: string;
    year: number;
    status: true;
  } = { name: "adan", year: 121, status: true };

  const { name, ...rest } = b;

  console.log(rest);
})();
