import calculate from "../1_unit_testing_kata_calculadora"

describe('calculate function', () => {
  test('adds 4 + 5 to equal 9', () => {
    // Arrange
    const operator = 'add';
    const num1 = 4;
    const num2 = 5;

    // Act
    const result = calculate(operator, num1, num2);

    // Assert
    expect(result).toBe(9);
  });

  test('subtracts 7 - 3 to equal 4', () => {
    // Arrange
    const operator = 'subtract';
    const num1 = 7;
    const num2 = 3;

    // Act
    const result = calculate(operator, num1, num2);

    // Assert
    expect(result).toBe(4);
  });

  test('multiplies 2 * 6 to equal 12', () => {
    // Arrange
    const operator = 'multiply';
    const num1 = 2;
    const num2 = 6;

    // Act
    const result = calculate(operator, num1, num2);

    // Assert
    expect(result).toBe(12);
  });

  test('divides 8 / 2 to equal 4', () => {
    // Arrange
    const operator = 'divide';
    const num1 = 8;
    const num2 = 2;

    // Act
    const result = calculate(operator, num1, num2);

    // Assert
    expect(result).toBe(4);
  });

  test('throws error when dividing by zero', () => {
    // Arrange
    const operator = 'divide';
    const num1 = 8;
    const num2 = 0;

    // Act & Assert
    expect(() => calculate(operator, num1, num2)).toThrow('Cannot divide by zero');
  });

  test('throws error with invalid operator', () => {
    // Arrange
    const operator = 'invalid';
    const num1 = 8;
    const num2 = 2;

    // Act & Assert
    expect(() => calculate(operator, num1, num2)).toThrow('Invalid operator');
  });
});