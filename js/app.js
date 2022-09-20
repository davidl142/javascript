// console.log("viculado 😍")
const nombre = "Blueweb";

const gato = {
  nombre: "valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  get nombreMayuscula() {
    return this.nombre.toUpperCase();
  },
  set agregarEnemigo(nuevoAmigo) {
    this.enemigos.push(nuevoAmigo);
  },
};

// GET
console.log(gato.nombreMayuscula);

// SET
gato.agregarEnemigo = "batman";
console.log(gato);

let a = { nombre: "hola" };
let b = a;

a.nombre = "chao";
console.log(b);
