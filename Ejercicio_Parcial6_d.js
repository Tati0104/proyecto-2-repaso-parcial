// Definir las duraciones en milisegundos para cada estado del semáforo
const duracionVerde = 5000;   // 5 segundos para verde
const duracionAmarillo = 2000; // 2 segundos para amarillo
const duracionRojo = 7000;    // 7 segundos para rojo

// Función para simular el semáforo
function semaforo() {
    console.log("🟢 Verde - Puedes avanzar");
    setTimeout(() => {
        console.log("🟡 Amarillo - Precaución");
        setTimeout(() => {
            console.log("🔴 Rojo - Detente");
            setTimeout(() => {
                // Llamar de nuevo a la función para continuar el ciclo
                semaforo();
            }, duracionRojo);
        }, duracionAmarillo);
    }, duracionVerde);
}

// Iniciar el ciclo del semáforo
semaforo();