const prompt = require('prompt-sync')(); // Usaremos 'prompt-sync' para obtener entradas del usuario

// Definir los costos de los planes de suscripción
const costosPlanes = {
    mensual: 50,        // Costo por mes
    trimestral: 140,    // Costo por 3 meses
    anual: 500          // Costo por 12 meses
};

// Iniciar ciclo para permitir salir del programa con "s"
let continuar = true;

while (continuar) {
    // Solicitar la edad y validar
    let edad = parseInt(prompt('Por favor, ingresa tu edad: '));

    if (isNaN(edad)) {
        console.log("Por favor, ingresa un número válido para la edad.");
        continue;
    }

    if (edad < 18) {
        console.log("Lo siento, debes ser mayor de edad para suscribirte al gimnasio.");
        break; // Terminamos el programa si el usuario es menor de edad
    }

    // Solicitar el tipo de plan
    let tipoPlan = prompt('Por favor, ingresa el tipo de plan de suscripción (mensual, trimestral, anual): ').toLowerCase();
    let numeroCuotas = 1; // Predeterminado para plan mensual
    let costoTotal = 0;

    // Estructura de decisión según el tipo de plan
    switch (tipoPlan) {
        case 'mensual':
            costoTotal = costosPlanes.mensual;
            break;

        case 'trimestral':
            numeroCuotas = parseInt(prompt('Por favor, ingresa el número de cuotas: '));
            if (isNaN(numeroCuotas) || numeroCuotas <= 0) {
                console.log("Número de cuotas no válido. Usando 1 como predeterminado.");
                numeroCuotas = 1;
            }
            costoTotal = costosPlanes.trimestral * numeroCuotas;
            break;

        case 'anual':
            numeroCuotas = parseInt(prompt('Por favor, ingresa el número de cuotas: '));
            if (isNaN(numeroCuotas) || numeroCuotas <= 0) {
                console.log("Número de cuotas no válido. Usando 1 como predeterminado.");
                numeroCuotas = 1;
            }
            costoTotal = costosPlanes.anual * numeroCuotas;
            break;

        default:
            console.log("Tipo de plan no válido. Inténtalo de nuevo.");
            continue; // Volver al inicio del ciclo
    }

    // Mostrar el resumen de la suscripción
    console.log("\nResumen de la suscripción:");
    console.log(`Tipo de plan: ${tipoPlan}`);
    console.log(`Número de cuotas: ${numeroCuotas}`);
    console.log(`Costo total: $${costoTotal}`);

    // Preguntar si el usuario desea salir del programa
    let salir = prompt('Presiona "s" para salir del programa o cualquier otra tecla para continuar: ').toLowerCase();
    continuar = salir === 's' ? false : true;
}

console.log("Saliendo del programa...");
/*Ejemplo!!!!!!
Por favor, ingresa tu edad: 34
Por favor, ingresa el tipo de plan de suscripción (mensual, trimestral, anual): anual
Por favor, ingresa el número de cuotas: 3

Resumen de la suscripción:
Tipo de plan: anual
Número de cuotas: 3
Costo total: $1500
Presiona "s" para salir del programa o cualquier otra tecla para continuar: k
Por favor, ingresa tu edad:*/
