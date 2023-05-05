
import * as readlineSync from 'readline-sync';

const alumnos = {};

function ingresarAlumno() {
const nombre = readlineSync.question('Ingrese el nombre del alumno: ');
const trimestre1 = parseFloat(readlineSync.question(`Ingrese la nota del ${nombre} en el trimestre 1: `));
const trimestre2 = parseFloat(readlineSync.question(`Ingrese la nota del ${nombre} en el trimestre 2: `));
const trimestre3 = parseFloat(readlineSync.question(`Ingrese la nota del ${nombre} en el trimestre 3: `));
 
alumnos[nombre] = {
trimestre1,
trimestre2,
trimestre3,
  };
}

function calcularPromedioAnual() {
const nombre = readlineSync.question('Ingrese el nombre del alumno: ');
const { trimestre1, trimestre2, trimestre3 } = alumnos[nombre];
const promedioAnual = (trimestre1 + trimestre2 + trimestre3) / 3;
 
  console.log(`El promedio anual del alumno ${nombre} es: ${promedioAnual}`);
}

while (true) {
 const opcion = readlineSync.question('Ingrese 1 para ingresar un nuevo alumno o 2 para calcular el promedio anual de un alumno existente: ');
  if (opcion === '1') {
    ingresarAlumno();
  } else if (opcion === '2') {
    
    calcularPromedioAnual();
  } else {
    
    console.log('Opción no válida. Intente de nuevo.');
  }
}