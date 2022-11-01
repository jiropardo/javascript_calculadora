const prompt = require('prompt-sync')({sigint: true});

running = true;
let total_global=0;

while (running) {
    console.log(`
    Calculadora

    Operaciones +-*/
    Digite una operación`);
  let operacion = prompt();
  // Convert the string input to a number
  console.log("Digite primero numero")

  

  let num1 = prompt()
  num1=Number(num1)
  console.log("Digite el segundo numero ")
  let num2 = prompt()
  num2=Number(num2)
  
  // Compare the guess to the secret answer and let the user know.
  if (operacion === "+") {
    total=num1+num2
    console.log(`El resultado de la suma es  ${total}`);
    total_global+=total
  } else if (operacion === "-")  {
    total=num1-num2
    console.log(`El resultado de la resta es  ${total}`);
    total_global+=total
  } 
  else if (operacion === "*")  {
    total=num1*num2
    console.log(`El resultado de la multiplicacion es  ${total}`);
    total_global+=total
  } else if (operacion === "/")  {
    total=num1/num2
    console.log(`El resultado de la division  ${total}`);
    total_global+=total
  } 

  console.log(`El global es  ${total_global}`)

  console.log("Desea realizar otra operacion y/n")
  let continuar = prompt();
  continuar === "n" ? running=false: a=0;

}