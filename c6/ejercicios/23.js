function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let resultado = 0;
  for (let i = 1; i<=numero;i++){
    resultado = numero % i
    if(resultado === 0 && i < numero && i>1){
      resultado = "No primo";
      break;
    }
  }
  if(resultado === "No primo"){
    return false;
  }
  else{
    return true;
  }
}

module.exports = esNumeroPrimo;
