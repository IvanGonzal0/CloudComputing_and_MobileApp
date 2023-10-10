// Crea una función que tome un número como argumento y devuelva 
// una promesa que se resuelva después de 3 segundos con el número 
// multiplicado por 2. 
// Luego, utiliza .then() para imprimir el resultado en la consola.

function multiplicaPorDos(numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof numero === 'number') {
          resolve(numero * 2);
        } else {
          reject('El argumento no es un número');
        }
      }, 3000); // Espera 3 segundos antes de resolver la promesa
    });
  }
  
  // Llama a la función y utiliza .then() para imprimir el resultado en la consola.
  multiplicaPorDos(5)
    .then((resultado) => {
      console.log('El resultado es:', resultado);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


// Rta:
// function doubleNumber(num) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(num * 2);
//       }, 2000);
//     });
//   }
  
//   doubleNumber(5).then((result) => {
//     console.log(result);
//   });