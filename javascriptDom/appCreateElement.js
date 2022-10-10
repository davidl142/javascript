const lista = document.querySelector("#lista");

const arrayPaises = ["Perú", "Bolivia", "Colombia"];

// hacen lo mismo
const fragment = document.createDocumentFragment();
// const fragment = new DocumentFragment();

arrayPaises.forEach((pais) => {
  const newNode = document.createElement("li");
  newNode.textContent = pais;

  const referenceNode = fragment.firstChild;

  fragment.insertBefore(newNode, referenceNode);
});
lista.appendChild(fragment);
// el resultado es invertido, imprimos el arreglo alreves con insertBefore pero tambien necesitamos la variable para identicar el primer registro que va hacer la lectura y poder identificar los null por ir invertido

// arrayPaises.forEach((pais) => {
//   const li = document.createElement("li");
//   li.textContent = pais;
//   fragment.appendChild(li);
// });
// lista.appendChild(fragment);
// // con esta implementacion evitamos el Reflow utilizando fragment

// con el fragment agregamos primero todo lo del ciclo y luego lo llevamos al html osea no estamos cargando ciclo a ciclo el html como los otros ejemplos.

// // no es muy recomendado como el innerHTML por que no son 100% eficiente utilizamos el appendChild
// arrayPaises.forEach((pais) => {
//   const li = document.createElement("li");
//   li.textContent = pais;
//   lista.appendChild(li);
// });

// // con innerHTML escribimos completamente el html incluso con las interaciones del ciclo osea que solo escribe un pais. con + antes evitamos que se sobre escriba --por cada vuelta de ciclo borra todo y lo vuelve a sobre escribir y tiene alto consumo con muchas interaciones = a Reflow y aqui tulizamos innerHTML
// arrayPaises.forEach((pais) => {
//   lista.innerHTML += `<li>${pais}</li>`;
// });

// const li = document.createElement("li");
// li.textContent = "elemento desde js";
// console.log(li);

// lista.appendChild(li);
