// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
// };

// console.log(gato.nombre);
// console.log(gato.duerme);
// console.log(gato.enemigos[0]);

// console.log(gato["nombre"]);
// console.log(gato["edad"]);
// console.log(gato["enemigos"][0]);

// gato.color = "Azul";

// gato.edad = 11;
// delete gato.duerme;
// console.log(gato);

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
// };

// console.log(gato.hasOwnProperty("nombre"));
// console.log(gato.hasOwnProperty("salud"));

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   otros: {
//     amigos: ["Cobarde", "Tímido", "Pegajoso"],
//     favoritos: {
//       comida: {
//         fria: "salmón",
//         caliente: "pollo",
//       },
//     },
//   },
// };

// console.log(gato.otros.amigos[0]);
// console.log(gato.otros.favoritos.comida.fria);

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
// };
// // console.log(gato.otros.favoritos);
// console.log(gato.otros?.favoritos);

// const frutas = ["sandía", "pera", "melon"];
// console.log(frutas.length);

// const frutas = ["sandía", "pera", "melon"];
// frutas.push("banana");
// console.log(frutas);

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer: function () {
//     console.log("Ahora está comiendo".toLocaleUpperCase());
//     console.log("Ahora está comiendo".toLocaleLowerCase());
//   },
// };

// gato.comer();

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer() {
//     console.log("Ahora está comiendo");
//   },
// };

// gato.comer();

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer(comida) {
//     return "Ahora está comiendo: " + comida;
//   },
// };

// console.log(gato.comer("pez"));

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer(comida) {
//     return `${nombre} está comiendo ${comida}`;
//   },
// };

// console.log(gato.comer("pez"));

// const nombre = "Ignacio";

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer(comida) {
//     return `${nombre} está comiendo ${comida}`;
//   },
// };

// console.log(gato.comer("pez"));

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer(comida) {
//     console.log(this);
//   },
// };

// gato.comer("pez");

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer(comida) {
//     return `${this.nombre} está comiendo ${comida}`;
//   },
// };

// console.log(gato.comer("pez"));

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer: (comida) => {
//     return `${this.nombre} está comiendo ${comida}`;
//   },
// };

// console.log(gato.comer("pez"));

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer(comida) {
//     return `${this.nombre} está comiendo ${comida}`;
//   },
//   mostrarEnemigos() {
//     return this.enemigos.forEach((item) => console.log(item));
//   },
// };

// gato.mostrarEnemigos();

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
// };

// // for (const propiedad in gato) {
// //   console.log(gato[propiedad]);
// // }

// // console.log(Object.values(gato));

// Object.values(gato).forEach((item) => console.log(item));

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   otros: {
//     amigos: ["Cobarde", "Tímido", "Pegajoso"],
//     favoritos: {
//       comida: {
//         fria: "salmón",
//         caliente: "pollo",
//       },
//     },
//   },
// };

// const nombreGato = gato.nombre;
// console.log(nombreGato);

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   otros: {
//     amigos: ["Cobarde", "Tímido", "Pegajoso"],
//     favoritos: {
//       comida: {
//         fria: "salmón",
//         caliente: "pollo",
//       },
//     },
//   },
// };

// const { nombre, duerme, edad, enemigos } = gato;
// console.log(nombre);
// console.log(duerme);
// console.log(edad);
// console.log(enemigos);

// const { nombre: nombreGato, duerme: duerme1 } = gato;
// console.log(nombreGato);
// console.log(duerme1);

// const gato = {
//   // nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   otros: {
//     amigos: ["Cobarde", "Tímido", "Pegajoso"],
//     favoritos: {
//       comida: {
//         fria: "salmón",
//         caliente: "pollo",
//       },
//     },
//   },
// };

// const { nombre: nombreGato = "Sin nombre" } = gato;
// console.log(nombreGato);

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   otros: {
//     amigos: ["Cobarde", "Tímido", "Pegajoso"],
//     favoritos: {
//       comida: {
//         fria: "salmón",
//         caliente: "pollo",
//       },
//     },
//   },
// };

// const {
//   otros: { amigos },
// } = gato;
// console.log(amigos);

// const enemigos = ["agua", "perros"];
// const [agua, perro, prueba] = enemigos;
// console.log(agua);
// console.log(perro);
// console.log(prueba);

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer(comida) {
//     return `${this.nombre} está comiendo ${comida}`;
//   },
//   mostrarEnemigos() {
//     return this.enemigos.forEach((item) => console.log(item));
//   },
// };

// const { comer } = gato;
// console.log(comer("pez"));
// console.log(gato.comer("pez"));

// // undefined está comiendo pez

// const gato = {
//   nombre: "Valiente",
//   duerme: true,
//   edad: 10,
//   enemigos: ["agua", "perros"],
//   comer(comida) {
//     return `${this.nombre} está comiendo ${comida}`;
//   },
//   get nombreMayuscula() {
//     return this.nombre.toUpperCase();
//   },
//   set nuevoEnemigo(nuevo) {
//     this.enemigos.push(nuevo);
//   },
// };

// // GET
// console.log(gato.nombreMayuscula);

// // SET
// gato.nuevoEnemigo = "batman";
// console.log(gato.enemigos);

// let a = "hola";
// let b = a;
// console.log(b);

// a = "chao";
// console.log(b);

// let a = ["hola"];
// let b = a;
// console.log(b);

// let a = ["hola"];
// let b = a;

// a.push("chao");

// console.log(b);

const a = {
  nombre: "hola",
};

const b = a;

a.nombre = "chao";

console.log(b);
