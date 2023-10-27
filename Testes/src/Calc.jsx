function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function pot(a, potencia) {
  return Math.pow(a, potencia);
}

function isPrimo(a) {
  if (a <= 1) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function parImpar(a) {
  if (a % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

function isNullOuVazio(a) {
  if (a == null) {
    return true;
  } else {
    return false;
  }
}

function isQuadrado(A, B, C, D) {
  if (A === B && B === C && C === D) {
    return true;
  } else {
    return false;
  }
}

function classificaQuadrilatero(A, B, C, D) {
  if (A <= 0 || B <= 0 || C <= 0 || D <= 0) {
    // Se for inválido
    return 0;
  }

  if (A === B && B === C && C === D) {
    // Se for um quadrado
    return 10;
  }

  if ((A === C && B === D) || (A === B && C === D)) {
    // Se for um retângulo
    return 20;
  }
  // Se for outro tipo de quadrilátero
  return 30;
}

function isPalindromo(str) {
  const textoFormatado = str.toLowerCase().replace(/[\W_]/g, ""); // Remove caracteres não alfabéticos e converte para minúsculas
  const textoInvertido = textoFormatado.split("").reverse().join("");
  return textoFormatado === textoInvertido;
}

module.exports = {
  soma,
  sub,
  mult,
  div,
  pot,
  isPrimo,
  parImpar,
  isNullOuVazio,
  isQuadrado,
  classificaQuadrilatero,
  isPalindromo,
  celsiusParaFahrenheit,
};
