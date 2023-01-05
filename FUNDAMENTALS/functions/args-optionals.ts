(() => {
  const fullName = (firstName:string, lastName?:(string|boolean)): string => {


    return `${firstName} ${lastName || '---'}`;
  };

  let noName:string ='tony';
  const name = fullName(noName)

  console.log({name})
})();
