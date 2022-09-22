// let nombreUsuario = "bluuweb";
// console.log("\nBienvenido: \n" + nombreUsuario + "\n");

// let nombreUsuario = "bluuweb";
// console.log(`
// Bienvenido:
// ${nombreUsuario}
// `);

// let nombreUsuario = "bluuweb";
// console.log(`Bienvenido: ${nombreUsuario.toUpperCase()}`);

// let nombreUsuario = "bluuweb";
// let estado = false;

// console.log(`
// ${estado ? "Bienvenido!" : "Adiós!"} ${nombreUsuario}
// `);

// let nombreUsuario = "bluuweb";
// let estado = true;

// console.log(`
// ${estado ? "Bienvenido!" : "Adiós!"} ${nombreUsuario}
// `);

// var estado = true;
// var estado = false;
// console.log(estado);

// let estado = true;
// let estado = false;
// console.log(estado);

// let estado = true;
// estado = false;
// console.log(estado);

// var estado = true;
// if (estado) {
//   var estado = false;
// }
// console.log(estado);

// let estado = true;
// if (estado) {
//   let estado = false;
//   console.log(estado);
// }
// console.log(estado);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// const estado = true;
// estado = false;

// for (const i = 0; i < 10; i++) {
//   console.log(i);
// }

// const estado = true;
// if (estado) {
//   const estado = false;
//   console.log(estado);
// }
// console.log(estado);

// const miArray = [];
// miArray = ["nuevoElemento"];

// const miArray = [];
// miArray[0] = ["nuevoElemento"];
// console.log(miArray);

// const frutas = ["Banana"];
// frutas.push("Sandía");
// console.log(frutas);

// const frutas = ["Banana"];
// frutas.unshift("Sandía");
// console.log(frutas);

// const frutas = ["manzana", "pera"];

// frutas.unshift("uva");

// const frutaEliminada = frutas.pop();

// console.log(frutas);
// console.log(frutaEliminada);

// const frutas = [];
// const fruta = prompt("🍒 Feria Market 🍉 ¿qué fruta desea comprar?");

// frutas.push(fruta);

// while (confirm("¿Desea agregar otro elemento al 🛒?")) {
//   const fruta = prompt("¿qué fruta desea comprar?");
//   frutas.push(fruta);
// }

// console.log("Ustede compró: ");
// for (let fruta of frutas) {
//   console.log(fruta);
// }

// declaro la función
// function numAleatorioRango(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// // invoco la función
// console.log(numAleatorioRango(1, 11));

// const miNumero = function (min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// };
// console.log(miNumero(1, 11));

// console.log(miNumero(1, 11));
// const miNumero = function (min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

// const miNumeroFlecha = (max) => {
//   return Math.floor(Math.random() * (max - 1)) + 1;
// };

// console.log(miNumeroFlecha(11));

// const miNumeroFlecha = (max) => Math.floor(Math.random() * (max - 1)) + 1;

// console.log(miNumeroFlecha(11));

// const miNumeroFlecha = (max) => Math.floor(Math.random() * (max - 1)) + 1;

// console.log(miNumeroFlecha(11));

// const miNumeroFlecha = (min, max) =>
//   Math.floor(Math.random() * (max - min)) + min;

// console.log(miNumeroFlecha(1, 11));

// const miNumeroFlecha = (min = 1, max = 10) =>
//   Math.floor(Math.random() * (max - min)) + min;

// console.log(miNumeroFlecha());

// let frutas = ["manzana", "sandía", "pera"];
// frutas.forEach((fruta) => console.log(fruta));

// let frutas = ["manzana", "sandía", "pera"];
// frutas.forEach((fruta, index, array) => {
//   console.log(index);
//   console.log(fruta);
//   console.log(array);
// });

const carrito = [];
const fruta = prompt("🍒 Feria Market 🍉 ¿qué fruta desea comprar?");

carrito.push(fruta);

while (confirm("¿Desea agregar otro elemento al 🛒?")) {
  const fruta = prompt("¿qué fruta desea comprar?");
  carrito.push(fruta);
}

console.log("Ustede compró: ");
carrito.forEach((fruta, index) => console.log(`${index + 1}: ${fruta}`));
