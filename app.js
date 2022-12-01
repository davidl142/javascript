const h1 = document.getElementById("tituloWeb");
//  el h1 es un elemento.

console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);

h1.textContent = "nuevo texto desde js";
h1.style.backgroundColor = "red";

h1.style.color = "white";
