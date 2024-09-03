const prompt = require('prompt-sync')();

// Base de datos simulada
const estudiantes = {
    "12345": "Ingeniería de Software",
    "67890": "Medicina",
    "11121": "Contabilidad",
};

const actividadesDeportivas = {
    "Fútbol": { cupos: 5, semestre: 1 },
    "Baloncesto": { cupos: 3, semestre: 2 },
    "Natación": { cupos: 4, semestre: 3 },
    "Voleibol": { cupos: 2, semestre: 4 },
};

// Función principal para el registro
function registrarDeporte() {
    // Solicitar datos al usuario
    const codigo = prompt('Por favor, ingresa tu código de estudiante: ');
    const carrera = prompt('Por favor, ingresa tu carrera: ');
    const deporte = prompt('Por favor, ingresa la actividad deportiva deseada (Fútbol, Baloncesto, Natación, Voleibol): ');
    const semestre = parseInt(prompt('Por favor, ingresa el semestre: '));

    // Validar código de estudiante y carrera
    if (!estudiantes[codigo] || estudiantes[codigo] !== carrera) {
        console.log("Lo siento, no estás registrado o tu carrera no es correcta.");
        return;
    }

    // Validar si la actividad deportiva existe y corresponde al semestre
    if (!actividadesDeportivas[deporte]) {
        console.log("La actividad deportiva seleccionada no existe.");
        return;
    }

    if (actividadesDeportivas[deporte].semestre !== semestre) {
        console.log("La actividad deportiva no está disponible para tu semestre.");
        return;
    }

    // Verificar disponibilidad de cupos
    if (actividadesDeportivas[deporte].cupos > 0) {
        // Registrar al estudiante
        actividadesDeportivas[deporte].cupos -= 1; // Reducir el número de cupos
        console.log(`¡Registro exitoso! Te has registrado en ${deporte}.`);
    } else {
        console.log("Lo siento, no hay cupos disponibles en la actividad deportiva seleccionada.");
    }
}

// Ciclo principal para continuar o salir
let continuar = true;
while (continuar) {
    registrarDeporte();
    let salir = prompt('¿Deseas registrar otro deporte? (s para salir): ').toLowerCase();
    continuar = salir !== 's';
}

console.log("Saliendo del programa...");