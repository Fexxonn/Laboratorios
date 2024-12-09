// // Paso 1

// // Declaración de variables con valores numéricos
// let numeroUno = 10;
// let numeroDos = 5;

// // Creación de variables para cada operación matemática
// let suma = numeroUno + numeroDos;
// let resta = numeroUno - numeroDos;
// let multiplicacion = numeroUno * numeroDos;
// let division = numeroUno / numeroDos;

// // Mostrar los resultados
// console.log(`La suma de ${numeroUno} y ${numeroDos} es: ${suma}`);
// console.log(`La resta de ${numeroUno} y ${numeroDos} es: ${resta}`);
// console.log(
//   `La multiplicación de ${numeroUno} y ${numeroDos} es: ${multiplicacion}`
// );
// console.log(`La división de ${numeroUno} y ${numeroDos} es: ${division}`);

// // Paso 2

// // Función para realizar operaciones matemáticas
// function realizarOperacion(num1, num2, operacion) {
//   if (operacion === "suma") {
//     return num1 + num2;
//   } else if (operacion === "resta") {
//     return num1 - num2;
//   } else if (operacion === "multiplicacion") {
//     return num1 * num2;
//   } else if (operacion === "division") {
//     return num1 / num2;
//   } else {
//     return "Error: operación no válida.";
//   }
// }

// // Ejemplo de uso
// let resultadoSuma = realizarOperacion(10, 5, "suma");
// let resultadoResta = realizarOperacion(10, 5, "resta");
// let resultadoMultiplicacion = realizarOperacion(10, 5, "multiplicacion");
// let resultadoDivision = realizarOperacion(10, 5, "division");

// // Mostrar resultados
// console.log(`Suma: ${resultadoSuma}`);
// console.log(`Resta: ${resultadoResta}`);
// console.log(`Multiplicación: ${resultadoMultiplicacion}`);
// console.log(`División: ${resultadoDivision}`);

// // Paso 3

// // Función para realizar operaciones matemáticas con validaciones
// function realizarOperacion(num1, num2, operacion) {
//   // Validar si la operación es válida
//   if (
//     operacion !== "suma" &&
//     operacion !== "resta" &&
//     operacion !== "multiplicacion" &&
//     operacion !== "division"
//   ) {
//     return "Error: operación no válida. Por favor, ingrese 'suma', 'resta', 'multiplicacion' o 'division'.";
//   }

//   // Realizar la operación
//   if (operacion === "suma") {
//     return num1 + num2;
//   } else if (operacion === "resta") {
//     return num1 - num2;
//   } else if (operacion === "multiplicacion") {
//     return num1 * num2;
//   } else if (operacion === "division") {
//     // Manejar división por cero
//     if (num2 === 0) {
//       return "Error: no se puede dividir por cero.";
//     } else {
//       return num1 / num2;
//     }
//   }
// }

// // Ejemplo de uso con validaciones
// let operacionValida = realizarOperacion(10, 5, "suma");
// let operacionInvalida = realizarOperacion(10, 5, "potencia");
// let divisionPorCero = realizarOperacion(10, 0, "division");

// // Mostrar resultados
// console.log(`Resultado de operación válida: ${operacionValida}`);
// console.log(`Resultado de operación inválida: ${operacionInvalida}`);
// console.log(`Resultado de división por cero: ${divisionPorCero}`);

// Paso 4

// Función para realizar operaciones matemáticas con validaciones
function realizarOperacion(num1, num2, operacion) {
  if (
    operacion !== "suma" &&
    operacion !== "resta" &&
    operacion !== "multiplicacion" &&
    operacion !== "division"
  ) {
    return "Error: operación no válida. Por favor, ingrese 'suma', 'resta', 'multiplicacion' o 'division'.";
  }

  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      return "Error: no se puede dividir por cero.";
    } else {
      return num1 / num2;
    }
  }
}

// Bucle para realizar múltiples operaciones
let continuar = true; // Variable para controlar el bucle

while (continuar) {
  let numeroUno = parseFloat(prompt("Ingrese el primer número:"));
  let numeroDos = parseFloat(prompt("Ingrese el segundo número:"));
  let operacion = prompt(
    "Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:"
  );

  // Verificar si el usuario desea salir
  if (operacion.toLowerCase() === "salir") {
    continuar = false;
    console.log("Gracias por usar la calculadora. ¡Adiós!");
    break;
  }

  // Realizar la operación y mostrar el resultado
  let resultado = realizarOperacion(
    numeroUno,
    numeroDos,
    operacion.toLowerCase()
  );
  console.log(`Resultado de la operación (${operacion}): ${resultado}`);
}
