// Problema: Calculadora

// Escribe una función calculate que tome tres argumentos: un operador como una cadena de texto ('add', 'subtract', 'multiply', 'divide') y dos números. Esta función debe devolver el resultado de aplicar el operador a los dos números dados.

// Por ejemplo:

// calculate('add', 4, 5) debería devolver 9.
// calculate('subtract', 7, 3) debería devolver 4.
// calculate('multiply', 2, 6) debería devolver 12.
// calculate('divide', 8, 2) debería devolver 4.
// Escribe pruebas unitarias utilizando la metodología Arrange-Act-Assert para verificar que tu función calculate funciona correctamente con diferentes operaciones y números de entrada.

// Recuerda probar casos de prueba límite y casos de prueba con números negativos o decimales para garantizar la robustez de tu función.


// calculate.js

 function calculate(operator, num1, num2) {
    switch (operator) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
          throw new Error('Cannot divide by zero');
        }
        return num1 / num2;
      default:
        throw new Error('Invalid operator');
    }
  }
  
  export default calculate;

  
  
