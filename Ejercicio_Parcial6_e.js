// Requerimos el paquete prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// Solicitamos la información del usuario
let origen = prompt("Ingrese el origen del viaje: ");
let destino = prompt("Ingrese el destino del viaje: ");
let fecha = prompt("Ingrese la fecha del viaje (YYYY-MM-DD): ");
let hora = prompt("Ingrese la hora del viaje (HH:MM AM/PM): ");
let tipoTiquete = prompt("Ingrese el tipo de tiquete (ida o ida y vuelta): ");
let nombrePasajero = prompt("Ingrese el nombre del pasajero: ");
let identificacionPasajero = prompt("Ingrese la identificación del pasajero: ");
let correoPasajero = prompt("Ingrese el correo del pasajero: ");

// Validación de datos
function validarDatos(origen, destino, fecha, hora, tipoTiquete, nombrePasajero, identificacionPasajero, correoPasajero) {
    return origen && destino && fecha && hora && tipoTiquete && nombrePasajero && identificacionPasajero && correoPasajero;
}

// Cálculo del costo del tiquete basado en los datos proporcionados
function calcularCosto(origen, destino, tipoTiquete) {
    let costoBase = 50000; // Costo base en pesos colombianos
    let costoFinal = costoBase;

    // Ajuste de costo según el destino
    switch (destino) {
        case "Medellín":
            costoFinal += 20000;
            break;
        case "Cali":
            costoFinal += 30000;
            break;
        case "Cartagena":
            costoFinal += 40000;
            break;
        default:
            costoFinal += 15000;
            break;
    }

    // Ajuste por tipo de tiquete
    if (tipoTiquete.toLowerCase() === "ida y vuelta") {
        costoFinal *= 1.8;
    }

    return costoFinal;
}

// Proceso de compra de tiquete
function comprarTiquete() {
    if (validarDatos(origen, destino, fecha, hora, tipoTiquete, nombrePasajero, identificacionPasajero, correoPasajero)) {
        let costoTiquete = calcularCosto(origen, destino, tipoTiquete);
        console.log("\nResumen de su compra:");
        console.log("Pasajero: " + nombrePasajero);
        console.log("Identificación: " + identificacionPasajero);
        console.log("Correo: " + correoPasajero);
        console.log("Origen: " + origen);
        console.log("Destino: " + destino);
        console.log("Fecha: " + fecha);
        console.log("Hora: " + hora);
        console.log("Tipo de tiquete: " + tipoTiquete);
        console.log("Costo del tiquete: $" + costoTiquete);

        // Confirmar la compra
        let confirmarCompra = prompt("¿Confirma la compra? (si/no): ").toLowerCase();

        if (confirmarCompra === "si") {
            console.log("Transacción exitosa. ¡Buen viaje!");
        } else {
            console.log("Compra cancelada.");
        }
    } else {
        console.log("Error: Por favor, ingrese todos los datos correctamente.");
    }
}

// Ejecutar el proceso de compra de tiquete
comprarTiquete();