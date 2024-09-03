const prompt = require('prompt-sync')();

// Horario del laboratorio (simulamos que está disponible de 8:00 a 18:00)
const horarioLaboratorio = {
    inicio: 8,
    fin: 18
};

// Estructura para almacenar reservas
let reservas = [];

// Función para validar y registrar una reserva
function registrarReserva() {
    const fecha = prompt('Por favor, ingresa la fecha de la reserva (formato AAAA-MM-DD): ');
    let horaInicio = parseInt(prompt('Por favor, ingresa la hora de inicio de la reserva (0-24): '));
    let duracion = parseInt(prompt('Por favor, ingresa la duración de la reserva en horas: '));
    const nombreUsuario = prompt('Por favor, ingresa el nombre del usuario o grupo: ');

    // Validar la hora de la reserva
    if (horaInicio < horarioLaboratorio.inicio || horaInicio + duracion > horarioLaboratorio.fin) {
        console.log(`No es posible realizar la reserva. El horario permitido es de ${horarioLaboratorio.inicio}:00 a ${horarioLaboratorio.fin}:00.`);
        return;
    }

    // Verificar la disponibilidad
    let disponible = true;
    for (let reserva of reservas) {
        if (reserva.fecha === fecha) {
            // Verificar si las horas se solapan
            let horaFin = horaInicio + duracion;
            let reservaHoraFin = reserva.horaInicio + reserva.duracion;
            if (
                (horaInicio >= reserva.horaInicio && horaInicio < reservaHoraFin) ||
                (horaFin > reserva.horaInicio && horaFin <= reservaHoraFin) ||
                (horaInicio < reserva.horaInicio && horaFin > reservaHoraFin)
            ) {
                disponible = false;
                break;
            }
        }
    }

    // Registrar la reserva si está disponible
    if (disponible) {
        reservas.push({
            fecha: fecha,
            horaInicio: horaInicio,
            duracion: duracion,
            nombreUsuario: nombreUsuario
        });
        console.log(`Reserva confirmada para ${nombreUsuario} el día ${fecha} desde las ${horaInicio}:00 por ${duracion} horas.`);
    } else {
        console.log("Lo siento, el salón ya está reservado en ese horario.");
    }
}

// Ciclo principal para continuar o salir
let continuar = true;
while (continuar) {
    registrarReserva();
    let salir = prompt('¿Deseas realizar otra reserva? (s para salir): ').toLowerCase();
    continuar = salir !== 's';
}

console.log("Saliendo del programa...");