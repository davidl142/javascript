const h1 = document.getElementById("tituloWeb");
//  el h1 es un elemento.

// const boton = document.querySelector(".btn .btn-primary");
// // ingresamos a la clase .btn que esta en el div

const boton = document.querySelector(".btn-primary");

// https://developer.mozilla.org/es/docs/Web/Events#eventos_est%C3%A1ndar

boton.addEventListener("click", () => {
  console.log("Me diste click");
  h1.textContent = "texto desde js";
  h1.style.color = "green";
});
// cambiamos estos atributos en el html en los atributos que trajimos con el DOM
console.log(boton);
