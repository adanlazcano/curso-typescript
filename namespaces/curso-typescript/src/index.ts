import * as Heroes from "./classes/Hero";
import powers, { Power } from "./data";
// import  { Hero as Heroes}  from "./classes/Hero";

const hero: Heroes.Hero = new Heroes.Hero(2, "batman", 40);

console.log(hero.power)

const powerTwo: Power = { id: 3, desc: "laser" };

const root: HTMLElement = document.getElementById("root") as HTMLElement;

root.innerHTML = `<br>${JSON.stringify(
  hero,
  null,
  2
)} <br><br>  ${JSON.stringify(powers, null, 2)}
<br><br>  ${JSON.stringify(powerTwo, null, 2)}

`;
