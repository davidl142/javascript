const lista = document.querySelector("#lista");

const arrayPaises = ["Perú", "Bolivia", "Colombia"];

// hacen lo mismo
// const fragment = document.createDocumentFragment();
const fragment = new DocumentFragment();

{
  /* <li id="lista">
  <li class="list"></li>
  <b>Pais:</b>
  <span class="text-primary">Aqui va el pais</span>
</li>; */
}

// con esta variable evitamos el Reflow por que almacenamos lo que recorremos con el ciclo
let template = "";

arrayPaises.forEach((pais) => {
  template += `
  <li class="list">
        <b>Pais:</b>
        <span class="text-primary">${pais}</span>
      </li>
`;
});
lista.innerHTML = template;

// // tenemos Reflow
// arrayPaises.forEach((pais) => {
//   lista.innerHTML += `
//   <li class="list">
//         <b>Pais:</b>
//         <span class="text-primary">${pais}</span>
//       </li>
// `;
// });

// aqui no tenemos Reflow
// arrayPaises.forEach((pais) => {
//   const li = document.createElement("li");
//   li.className = "list";

//   const b = document.createElement("b");
//   b.textContent = "Pais: ";

//   const span = document.createElement("span");
//   span.className = "text-primary";
//   span.textContent = pais;

//   li.appendChild(b);
//   li.appendChild(span);

//   fragment.appendChild(li);
// });

// lista.appendChild(fragment);
