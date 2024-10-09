function esPar(num) {
  if (num % 2 == 0) {
    console.log(`${num} es par`);
  } else {
    console.log(`${num} es impar`);
  }
}

esPar(3);
// ---------------------2--------------------
function mayorMenorIgual(num1, num2) {
  if (num1 === num2) {
    console.log("Estos numeros son iguales");
  } else if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}.`);
  } else {
    console.log(`${num2} es mayor que ${num1}.`);
  }
}

mayorMenorIgual(2, 6);
// ---------------------3--------------------
function esMultiplo(multiplo) {
  if (multiplo % 5 === 0) {
    console.log(`${multiplo} es multiplo de 5`);
  } else {
    console.log(`${multiplo} no es multiplo de 5`);
  }
}

esMultiplo(6);

// ---------------------4--------------------

function imprimirHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    if (i <= numero) {
      console.log(i);
    }
  }
}

// ---------------------5--------------------

function imprimirXveces(palabra, veces) {
  let i = 1
  while (i <= veces){
    console.log(palabra)
    i++
  }
  
}

imprimirXveces("hola", 8)

// ---------------------6--------------------

let arreglo = ['Azure', 'AWS', 'GoogleCloud']

function imprimirArray (arreglo){
  let i = 0
  while(i <= arreglo.length){
    console.log(arreglo[i])
    i++
  }
}

imprimirArray(arreglo)

// ---------------------7--------------------

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evitar5 (numeros) {
  
  for(let i = 0 ; i < numeros.length ; i++){
    if(i !== 4){
      console.log(numeros[i])
    }
  }

}

evitar5(numeros);

const numeritos = [5, 7, 9]

function multiplicarNumeros (numeritos, multiplicador) {
  for(let i = 0; i < numeritos.length ; i++){
    console.log(numeritos[i] * multiplicador)
  }
}

multiplicarNumeros(numeritos, 4)

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.