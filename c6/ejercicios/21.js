function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let i = 0
  let resultado = 1
  while(i < numero){
    resultado *= 2
    i++
    if(resultado === numero){
      break;
    }
  }
  if (resultado === numero) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = esPotenciaDeDos;
