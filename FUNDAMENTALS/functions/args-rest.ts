(() => {
  const fullName = (firstName: string, ...rest: string[]): string => {
    return `${firstName} ${rest.join(" ")}`;
  };

  const name = fullName("tony", "starks", "adomaitis");

  console.log({ name });
})();
