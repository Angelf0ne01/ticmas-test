// Escribe un programa que imprima una línea por cada número del 1 al 100.
// Normalmente, imprime solo el número en sí.
// Para los múltiplos de tres, imprime Fizz en lugar del número.
// Para los múltiplos de cinco, imprime Buzz en lugar del número.
// Para los números que son múltiplos tanto de tres como de cinco, imprime FizzBuzz en lugar del número.


function fizzBuzz(number) {

    if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz"
    }

    if(number % 3 === 0){
        return "Fizz"
    }

    if(number % 5 === 0){
        return "Buzz"
    }
  
    return number;
  }

  //fizzBuzz(1) --> 1
  //fizzBuzz(3) --> Fizz
  //fizzBuzz(5) --> Buzz
  //fizzBuzz(15) --> FizzBuzz


  export default fizzBuzz;
