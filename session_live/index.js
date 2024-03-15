
function validateParams(a, b) {
    return !a || !b
  }
function sum(a, b) {
   if(validateParams(a, b)){
    return "Argumentos invalidos"
   };

  return a + b;
}


module.exports = sum;
