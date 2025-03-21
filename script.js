let display = document.getElementById('display');

// no visor
function acrescentarNum(numero) {
  display.value += numero;
}

function acrescentarOperador(operador) {
  // Permite o operador '-' apenas no início ou após um número
  if (display.value === '' && operador === '-') {
    display.value += operador; // Permite o primeiro '-' (número negativo)
  } else if (display.value !== '' && !isOperador(display.value[display.value.length - 1])) {
    display.value += ' ' + operador + ' ';
  }
}

function isOperador(caractere) {
  // Verifica se o caractere é um operador (+, -, *, /)
  return caractere === '+' || caractere === '-' || caractere === '*' || caractere === '/';
}

function limpar() {
  display.value = '';
}

// valor do visor
function calcular() {
  try {
    display.value = eval(display.value);
  } catch (erro) {
    display.value = 'Erro';
  }
}
