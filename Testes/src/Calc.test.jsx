const {
  soma,
  sub,
  mult,
  pot,
  div,
  parImpar,
  isNullOuVazio,
  isQuadrado,
  classificaQuadrilatero,
  isPalindromo,
  celsiusParaFahrenheit,
  isPrimo,
} = require("./Calc");

test("soma", () => {
  expect(soma(1, 2)).toBe(3);
  expect(soma(-1, -2)).toBeLessThan(0);
});

test("sub", () => {
  expect(sub(3, 1)).toBe(2);
  expect(sub(5, 10)).toBeLessThan(0);
});

test("mult", () => {
  expect(mult(4, 2)).toBe(8);
  expect(mult(0, 3)).toBeFalsy();
});

test("div", () => {
  expect(div(10, 2)).toBe(5);
  expect(div(9, 3)).not.toBe(4);
});

test("pot", () => {
  expect(pot(5, 2)).toBe(25);
  expect(pot(2, 3)).toBeGreaterThan(7);
});

test("isPrimo", () => {
  expect(isPrimo(2)).toBe(true);
  expect(isPrimo(15)).toBeFalsy();
});

test("celsiusParaFahrenheit", () => {
  expect(celsiusParaFahrenheit(20)).toBe(68);
  expect(celsiusParaFahrenheit(0)).toBeLessThan(40);
});

test("parImpar", () => {
  expect(parImpar(4)).toBe("par");
  expect(parImpar(7)).toMatch(/impar/);
});

test("isNullOuVazio", () => {
  expect(isNullOuVazio("olá")).toBe(false);
  expect(isNullOuVazio(null)).toBeTruthy();
});

test("isQuadrado", () => {
  expect(isQuadrado(2, 2, 2, 2)).toBe(true);
  expect(isQuadrado(2, 3, 2, 2)).not.toBe(true);
});

test("classificaQuadrilatero", () => {
  expect(classificaQuadrilatero(3, 3, 3, 3)).toBe(10);
  expect(classificaQuadrilatero(2, 2, 4, 4)).toBe(20);
  expect(classificaQuadrilatero(2, 2, 4, 5)).toBe(30);
});

test("isPalindromo", () => {
  expect(isPalindromo("A cara rajada da jararaCa")).toBe(true);
  expect(isPalindromo("Teste")).toBeFalsy();
});
