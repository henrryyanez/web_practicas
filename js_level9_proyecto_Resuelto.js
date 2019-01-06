// ¡Bienvenido a la Parte 8: Su proyecto de nivel uno de JavaScript!
// Para este proyecto, construirá un sitio web genérico que parecerá hacer preguntas mundanas a los usuarios normales, ¡pero en secreto está buscando un espía! A cualquier persona que visite su sitio web se le hará una serie de preguntas, solo el Spy podrá darle las respuestas específicas que usted espera. Si todas las preguntas son respondidas correctamente, ¡publicará un mensaje secreto en la consola para que el Spy lo lea!
//
// Aquí están las cuatro condiciones que verás para el espía:
//
// La espía tiene la misma primera letra de su nombre y apellido
// El espía está entre la edad de 20 y 30 años (exclusivo de 20 y 30 años).
// El espía mide por lo menos 170 centímetros de altura.
// El espía tiene un nombre de mascota que termina con la letra "y".
// Vamos a dejar este proyecto un poco más abierto, pero si sientes que necesitas más orientación, ¡echa un vistazo a los videos de la solución! Pero créalo o no, hemos cubierto todo lo que necesita saber para completar esta tarea. Le sugeriría que use Javascript para solicitar información al usuario y establecer estas variables. Luego usa estas variables para verificar que las cuatro condiciones sean todas verdaderas. ¡Depende de usted cuál es el mensaje secreto!
//
// Un espía con la siguiente información debe ver su mensaje secreto:
//
// Jose johnson
// 26 años de edad
// 175 cm de altura
// Nombre de la mascota es "Sammy"
// Tenga en cuenta que puede hacer las preguntas de la pregunta en el orden que desee, incluso puede separar la solicitud de nombre y luego otra pregunta de apellido.
//
// ¡También recuerda cambiar el script src a tu propio archivo .js! Ahora mismo está conectado a Part8.js que contiene las soluciones.


var firsName = prompt("Primer nombre por favor: ")
var lasName = prompt("Segundo nombre por favor: ")
var age = prompt("Que edad tienes?: ")
var height = prompt("Cual es tu altura en cm: ")
var petName = prompt("Nombre de tu mascota: ")
alert("Gracias por la información!")
// Cuatro condiciones

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// Condicion de Nombre
if (firsName[0] === lasName[0]) {
  nameCond = true;
}else {
  nameCond = false;
}

// Condicion de edad
if (age > 20 && age < 30) {
  ageCond = true;
}else {
  ageCond = false;
}

// Condicion de altura
if (height >= 170) {
  heightCond = true;
}else {
  heightCond = false;
}

// Condicion de nombre de masccota
if (petName[petName.length-1] === "y") {
  petCond = true;
}else {
  petCond = false;
}

// Chequeo de todas las condiciones
if (nameCond && ageCond && heightCond && petCond) {
  console.log("Hola Spy!!!");
}else {
  console.log("No debes ver aqui!!!")
}
