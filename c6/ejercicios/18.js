function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if(a >0 && b >0){
    let resultado = 1
    for (let i = a;i <= b;i++){
     resultado *= i;
    }
  return resultado;
  }
  else{
  return 0;
  }
}
module.exports = productoEntreNúmeros;