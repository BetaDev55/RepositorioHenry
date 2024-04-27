function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let resultado = 0;
  let i = 0;
  while (i<=n){
    resultado += i;
    i++;
  }
  return resultado;
}

module.exports = sumarHastaN;