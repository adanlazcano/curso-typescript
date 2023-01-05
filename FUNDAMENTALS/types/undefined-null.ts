(() => {
 //strictNullChecks

 const isActive:(boolean| undefined) = undefined

  console.log(isActive);

  const isNoActive:(boolean| null) = null

  console.log(isNoActive);

})();
