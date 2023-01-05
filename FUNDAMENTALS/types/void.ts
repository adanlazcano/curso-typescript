(()=>{

  function callBatman ():void {
    console.log(1)
    return;
  }
const a = callBatman()

console.log(a)

const b = ():void =>{
  console.log(43)
  return;
}

console.log(b())

})()