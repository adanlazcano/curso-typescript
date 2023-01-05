(() => {
  const fullName = (firstName:string, lastName:(string|boolean)): string => {
if(!firstName){
  throw new Error('required name')
}

    return `${firstName} ${lastName}`;
  };

  let noName:string ='tony';
  const name = fullName(noName,true)

  console.log({name})
})();
