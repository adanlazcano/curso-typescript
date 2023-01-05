// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

const contar = (heroes: string[]): number => {
  return heroes.length;
};
const superHeroes: Array<string> = [
  "Flash",
  "Arrow",
  "Superman",
  "Linterna Verde",
];
console.log(contar(superHeroes));

//Parametros por defecto
const llamarBatman = (llamar = true): void => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
};

llamarBatman();

// Rest?
const unirheroes = (...personas: string[]): string => {
  return personas.join(", ");
};

// Tipo funcion
const noHaceNada = (
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: Array<string>
) => {};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (
  n: number,
  t: string,
  b: boolean,
  a: Array<string>
) => void;
noHaceNadaTampoco = noHaceNada;
