// document.addEventListener("DOMContentLoaded", () => {
//     console.log(document.getElementById("tituloWeb"));
//     console.log(document.getElementById("tituloWeb").textContent);
//   });
//   // precargar sin importar donde esta el script en el html y evitamos error.

console.log(document.getElementById("tituloWeb"));
// console.log(document.getElementById("tituloWeb").textContent);

console.log(document.querySelector("#tituloWeb"));
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("h1"));
// reconoce el documento html como si fuera un css. selector de etiquetas

console.log(document.querySelector(".text-danger"));
// seleciona el primer elemento de todos los que tiene la misma clase.

console.log(document.querySelectorAll(".text-danger"));
// Seleciona todos los elementos que tiene la clase text-danger

console.log(document.querySelectorAll(".container .text-danger"));
// Seleciona los elementos que tiene la clase text-danger que estan en el container
