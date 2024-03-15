import fizzBuzz from "../2_unit_testing_kata"


describe('Fizzbuzz should', () => { 

  test("Existe la funcion",()=>{
    expect(fizzBuzz(2)).toBeDefined();
  })

  test('Normalmente, imprime solo el número en sí', () => {
    //arrange
    const number =2 ;

    //act
    const restult =fizzBuzz(number)
    //assert
    expect(restult).toBe(number)
  })

  test('Para los múltiplos de tres, imprime Fizz en lugar del número.', () => {
     //arrange
     const number =3 ;

     //act
     const restult =fizzBuzz(number)
     //assert
     expect(restult).toBe("Fizz")
  })

  test('Para los múltiplos de cinco, imprime Buzz en lugar del número.', () => {
     //arrange
     const number =5 ;

     //act
     const restult =fizzBuzz(number)
     //assert
     expect(restult).toBe("Buzz")
  })

  test('Para los números que son múltiplos tanto de tres como de cinco, imprime FizzBuzz en lugar del número.', () => {
     //arrange
     const number =15 ;

     //act
     const restult =fizzBuzz(number)
     //assert
     expect(restult).toBe("FizzBuzz")
  })
})