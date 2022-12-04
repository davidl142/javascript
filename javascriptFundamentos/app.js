// alert("esto es una alerta del navegador 😒");
// console.log("un valor de tipo texto");
// console.log(20);
// console.log(1.2);
// console.log(1, 62);
// console.log(1 + 1);
// console.log(true);
// console.log(false);

// // let x = 10;
// // let y = false;
// let z = x;
// let n = "Juanito";

// let x = 10;
// let y = 20;
// let resultado = x * y;

// console.log(resultado);

// let nombreUsuario = "davidl42";
// let edad = "14";
// let nacionalidad = "mexicana";
// let comprometido = "No";

// console.log("Su nombre es:");
// console.log(nombreUsuario);
// console.log("Su edad es:");
// console.log(edad);
// console.log("Su nacionalidad es:");
// console.log(nacionalidad);
// console.log("¿está comprometido?");
// console.log(comprometido);

// var one = "Hello, ";
// var two = "how are you?";
// var joined = one + two;
// console.log(joined);

// console.log(one + two);

// console.log("Hello, " + "how are you?");

// var nombreUsuario = "David alejandro";
// var edad = "14";

// console.log("Su nombre es: " + nombreUsuario + " y su edad es: " + edad);

// var numeroUno = 100;
// var numeroDos = 200;
// console.log(numeroUno + numeroDos);

// let apellido = prompt("Ingresa un apellido");
// console.log(apellido);

// let numeroUno = prompt("Ingresa el primero número");
// let numeroDos = prompt("Ingresa el segundo número");
// let resultado = numeroUno + numeroDos;
// console.log(resultado); // ¿no es el resultado esperado?

// let numeroUno = prompt("Ingresa el primero número");
// let numeroDos = prompt("Ingresa el segundo número");
// console.log(typeof numeroUno);
// let resultado = parseInt(numeroUno) + parseInt(numeroDos);
// console.log(resultado);

// let resultado = 1 + 1;
// console.log(resultado);

// let resultado = 2 - 1;
// console.log(resultado);

// let resultado = 5 * 20;
// console.log(resultado);

// let resultado = 20 / 5;
// console.log(resultado);

// let resultado = 8 % 3;
// console.log(resultado);

// let resultado = 2 * (100 / 5) + 10;
// console.log(resultado);

// let resultado = 20 > 10;
// console.log(resultado);

// let resultado = 20 < 10;
// console.log(resultado);

// let resultado = 20 === 10;
// console.log(resultado);

// let resultado = 20 == "20";
// console.log(resultado);

// let resultado = 20 !== 10;
// console.log(resultado);

// let resultado = 10 != "10";
// console.log(resultado);

// let resultado = true && true;
// console.log(resultado);

// let resultado = 20 > 10 && 10 < 20;
// console.log(resultado);

// let resultado = true && true && false;
// console.log(resultado);

// let resultado = true || false;
// console.log(resultado);

// let resultado = true || false || false;
// console.log(resultado);

// let resultado = !false;
// console.log(resultado);

// let textJavascript = prompt("Escriba 'javascript'");

// if (textJavascript === "javascript") {
//   console.log("Lo escribiste super bien!");
// } else {
//   console.log("Lo escribiste mal");
// }

// let numUsuario = prompt("Ingrese numero del 1 al 10");

// console.log(numUsuario + " Es: " + typeof numUsuario);

// console.log(parseInt(numUsuario));

// if (parseInt(numUsuario) <= 10) {
//   // Sentencia true
//   console.log("Genial!!");
// } else {
//   // Sentencia false
//   console.log("Super mal!!");
// }

// let opcionUser = prompt(`
// Elija una opción:
// 1: Libros
// 2: Películas
// 3: Juegos
// `);

// switch (opcionUser) {
//   case "1":
//     console.log("Principito");
//     break;
//   case "2":
//     console.log("Matrix");
//     break;
//   case "3":
//     console.log("NFS");
//     break;
//   default:
//     console.log("Opción no válida");
//     break;
// }

// let numero = 0;
// while (numero <= 10) {
//   console.log(numero);
//   numero++; //numero = numero + 1;
// }
// console.log("FIN: " + numero);

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(getRandomInt(1, 13));

// let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
// console.log(numeroMaquina);
// let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

// let vidas = 3;

// while (numeroMaquina !== numeroUser && vidas > 1) {
//   vidas--;
//   numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
// }

// if (numeroMaquina === numeroUser) {
//   console.log("GANASTE");
// } else {
//   console.log("PERDISTE, el número era: " + numeroMaquina);
// }

// let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
// console.log(numeroMaquina);
// let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

// let vidas = 3;

// while (numeroMaquina !== numeroUser && vidas > 1) {
//   if (numeroMaquina < numeroUser) {
//     console.log("Es más bajo");
//   } else {
//     console.log("Es más alto");
//   }

//   vidas--;
//   numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
// }

// if (numeroMaquina === numeroUser) {
//   console.log("GANASTE");
// } else {
//   console.log("PERDISTE, el número era: " + numeroMaquina);
// }

// let frutas = ["manzana", "platano", "pera"];
// console.log(frutas);

// let frutas = ["manzana", "platano", "pera"];
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

// let frutas = ["manzana", "platano", "pera"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for (let fruta of frutas) {
//   console.log(fruta);
// }

// for (let fruta in frutas) {
//   console.log(fruta);
// }

// function saludar() {
//   console.log("Bienvenido!");
// }

// saludar();

// saludar();
// function saludar() {
//   console.log("Bienvenido!");
// }

// function saludar(nombreUsuario) {
//   console.log("Bienvenido! " + nombreUsuario);
// }
// saludar("Ignacio");

// function saludar(nombreUsuario) {
//   return "Bienvenido " + nombreUsuario;
// }

// console.log(saludar("Ignacio"));

// function sumar(n1, n2) {
//   return parseInt(n1) + parseInt(n2);
// }

// let numeroUno = prompt("Ingrese primer número");
// let numeroDos = prompt("Ingrese segundo número");

// let resultado = sumar(numeroUno, numeroDos);

// console.log("El total es: " + resultado);

// function sumar(n1, n2) {
//   return n1 + n2;
// }

// let resultadoUno = sumar(10, 20);
// let resultadoDos = sumar(50, 60);
// let resultadoTres = sumar(100, 30);

// console.log("El total uno es: " + resultadoUno);
// console.log("El total dos es: " + resultadoDos);
// console.log("El total tres es: " + resultadoTres);
