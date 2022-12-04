const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

// esto pasa cada vez que presiono o empujo uno de los botones crea los objetos.
// const carritoObjeto = {
//     "Manzana"{
//     titulo: "Manzana",
//     id: "Manzana",
//     cantidad: 1,
//     }
// };

const carritoObjeto = {};

const agregarAllCarrito = (e) => {
  console.log(e.target.dataset.fruta);

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  // aqui sumamos las cantidades a los diferentes productos, tambien buscamos los productos para sumarlos. aqui estamos evaluando si el objeto ya exite solo le vamos a sumar la catidad por cada click
  if (carritoObjeto.hasOwnProperty(producto.titulo)) {
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }

  carritoObjeto[producto.titulo] = producto;

  pintarCarrito(producto);
  //   en este punto podemos ver el objeto como se crea en el explorador. cada vez que precionamos click
  //   console.log(carritoObjeto);
};

const pintarCarrito = (producto) => {
  // aqui borramos los elementos del template repetidos para que solo queden una vez
  carrito.textContent = "";
  //   console.log("pintar carrito", producto);
  // nos pinta el producto seleciono o carrito
  Object.values(carritoObjeto).forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    // por el ciclo debe ser item y no producto por el ciclo
    clone.querySelector(".badge").textContent = item.cantidad;
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

btnesBotones.forEach((btn) => {
  btn.addEventListener("click", agregarAllCarrito);
});

// // probar los botones
// btnesBotones.forEach((btn) => {console.log(btn)});

// // probar las variables
// console.log(carrito);
// console.log(template);
// console.log(fragment);
// console.log(btnesBotones);
