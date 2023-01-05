type Vehicle = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

// Objetos
const batimovil: Vehicle = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

const bumblebee: Vehicle = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    // El metodo disparar es opcional
    console.log("Disparando");
  },
};

type Villian = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
};

// Villanos debe de ser un arreglo de objetos personalizados
const villanos: Villian[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true,
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true,
  },
];
console.log(villanos);

// Multiples tipos

type Charles = {
  poder: string;
  estatura: number;
};

type Apocalypse = {
  lider: boolean;
  miembros: Array<string>;
};

// cree dos tipos, uno para charles y otro para apocalipsis
const charles: Charles = {
  poder: "psiquico",
  estatura: 1.78,
};

const apocalipsis: Apocalypse = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalypse;

mystique = charles;
mystique = apocalipsis;
