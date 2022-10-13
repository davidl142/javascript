const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector("#liTemplate");

const arrayPaises = ["Perú", "Bolivia", "Colombia"];

// const clickPaises = () => console.log("me diste click");
const clickPaises = (e) => console.log("me diste click", e.target);
// nos devuelve el elemento completo donde presionamos el click el "e" pinta el elemento

arrayPaises.forEach((pais) => {
  // const clone = liTemplate.content.cloneNode(true);
  const clone = liTemplate.content.firstElementChild.cloneNode(true);
  clone.querySelector("span").textContent = pais;
  // firstElementChild soluciona el problema si vamos agregar una addEventListener a elementos que vienen de forma dinamica
  clone.addEventListener("click", clickPaises);

  fragment.appendChild(clone);
  // querySelector nos permite tener todo mas organizado
});

lista.appendChild(fragment);

// // hacen lo mismo
// // const fragment = document.createDocumentFragment();
// // const fragment = new DocumentFragment();

// const clone = liTemplate.content.cloneNode(true);
// // clonamos la variable que requerimos. que seria const liTemplate

// // console.log(clone.querySelector(".text-primary"));

// clone.querySelector(".text-primary").textContent =
//   "agregué a través de un template";

// lista.appendChild(clone);
// // utilizamos un template lo clonamos y luego lo pintamos en la lista en el html
