var firs = prompt("Ingresa tu PRIMER Nombre: ");
var last = prompt("Ingresa tu SEGUNDO Nombre: ");
var age = prompt("Cual es tu edad actual?: ");
var altura = prompt("Ingresa tu altura en centimetros: ");
var pet = prompt("Ingresa el nombre de tu mascota: ");

alert("Te vamos a hacer unas preguntas personales")

A = firs[0]
B = last[0]
Valor = (A == B)

petLetra = pet.length
petUlti = (petLetra-1)
petVal = pet[petUlti]

// Validador de Inicial de nombre y Apellido
if (Valor == true) {
  console.log("Coinciden");
  }else {
    console.log("NO coinciden");
  }

// //Edad
  if (age <= 30 && age >= 20) {
    console.log("Esté entre 20 y 30 años");
  }else {
    console.log("Fuera del rango de Edad");
  }

// // Comprobador de altura mayor a 170cm

  if (altura >= 170) {
    console.log("Mide mas de 170 cm");
  }else {
    console.log("NO MIDE LOS 170 cm");
  }

// Comprobador de ultima letra ingresada en el nombre de masccota

if (petVal == "y") {
  console.log("Ultima letra termina en Y");
}else {
  console.log("No temina en Y");
}
