//https://www.codewars.com/kata/583710ccaa6717322c000105

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    number = number * 8;
  } else {
    number = number * 9;
  }
  return number;
}