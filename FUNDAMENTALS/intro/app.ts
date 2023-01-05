const c = console.log

const a:number = 10
let b:number = 10

function sayHello(msg: number | string) {
  console.log(msg)
  return msg
}

c(a)
sayHello('12');

(()=>{
  console.log(456)
})()
