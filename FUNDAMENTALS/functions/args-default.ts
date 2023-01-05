(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {

    if(upper){
       return `${firstName} ${lastName} ${upper}`.toUpperCase();
    }else{
      return `${firstName} ${lastName} ${upper}`;
    }
   
  };

  let noName: string = "tony";
  const name = fullName(noName, "starks");

  console.log({ name });
})();
