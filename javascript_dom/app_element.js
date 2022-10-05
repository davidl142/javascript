const h1 = document.getElementById("tituloWeb");
//  el h1 es un elemento. es igual getElementById o querySelector
// const h1 = document.querySelector("#tituloWeb");

// https://developer.mozilla.org/es/docs/Web/API/Element

console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);

h1.textContent = "nuevo texto desde js";
h1.style.backgroundColor = "red";
h1.style.color = "white";
