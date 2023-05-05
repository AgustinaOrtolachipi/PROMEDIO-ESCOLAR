"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var alumnos = {};
function ingresarAlumno() {
    var nombre = readlineSync.question('Ingrese el nombre del alumno: ');
    var trimestre1 = parseFloat(readlineSync.question("Ingrese la nota del ".concat(nombre, " en el trimestre 1: ")));
    var trimestre2 = parseFloat(readlineSync.question("Ingrese la nota del ".concat(nombre, " en el trimestre 2: ")));
    var trimestre3 = parseFloat(readlineSync.question("Ingrese la nota del ".concat(nombre, " en el trimestre 3: ")));
    alumnos[nombre] = {
        trimestre1: trimestre1,
        trimestre2: trimestre2,
        trimestre3: trimestre3,
    };
}
function calcularPromedioAnual() {
    var nombre = readlineSync.question('Ingrese el nombre del alumno: ');
    var _a = alumnos[nombre], trimestre1 = _a.trimestre1, trimestre2 = _a.trimestre2, trimestre3 = _a.trimestre3;
    var promedioAnual = (trimestre1 + trimestre2 + trimestre3) / 3;
    console.log("El promedio anual del alumno ".concat(nombre, " es: ").concat(promedioAnual));
}
while (true) {
    var opcion = readlineSync.question('Ingrese 1 para ingresar un nuevo alumno o 2 para calcular el promedio anual de un alumno existente: ');
    if (opcion === '1') {
        ingresarAlumno();
    }
    else if (opcion === '2') {
        calcularPromedioAnual();
    }
    else {
        console.log('Opción no válida. Intente de nuevo.');
    }
}
