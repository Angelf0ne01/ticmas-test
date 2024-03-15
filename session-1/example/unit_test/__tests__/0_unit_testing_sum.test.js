import sum from "../0_unit_testing_sum"

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});