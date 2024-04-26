function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  if (typeof num === "number" && num % 2 != 0) {
    return true;
  } else {
    return false;
}
}

module.exports = esImpar;