(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */
  const resultado = numbers.map(numero => numero * 5);


  /* Second excercise */
  console.log(resultado);

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */
  const nombresOrdenados = names.sort();

  /* Thrid excercise */
  console.log(nombresOrdenados);

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */
  const letrasUnicas = Array.from(new Set(data));

  /* Fourth excercise */
  console.log(letrasUnicas);

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */
const frecuenciaLetras = {};

for (let letra of texto) {
    frecuenciaLetras[letra] = (frecuenciaLetras[letra] || 0) + 1;
}
for (let letra in frecuenciaLetras) {
    console.log(`"${letra}" :${frecuenciaLetras[letra]}`);
}

})();
