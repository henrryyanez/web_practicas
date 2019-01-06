// Loop que imprime una salida unicamente cuando
// el numero del 1 al 10 es PAR

var num = 1;

while (num < 11) {
  if (num%2 === 0) {  //Usamos el modulo porque el resto debe ser 0 cuando es par
    console.log(num);
  }
  num = num+1;
}
