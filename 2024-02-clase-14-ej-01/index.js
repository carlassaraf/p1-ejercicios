document.addEventListener("DOMContentLoaded", () => {

    // Evento para formulario
    document.querySelector("form").addEventListener("submit", (e) => {
        // Prevengo que se refresque la pagina
        e.preventDefault();

        // Capturo todos los inputs
        let cantidadPersonas = document.querySelector("#cantidad-personas");
        let habitacion = document.querySelector("#habitacion");

        // Valido input de cantidad de personas

        // Maximo de personas aleatorio (simula capacidad del hotel)
        let maximo = Math.ceil(Math.random() * 145 + 5);

        if(isNaN(parseInt(cantidadPersonas.value))) {
            // Campo obligatorio
            console.log("Campo obligatorio");
        }
        else if(parseInt(cantidadPersonas.value) < 1) {
            // Por lo menos reservar para una persona
            console.log("Por lo menos una persona");
        }
        else if(parseInt(cantidadPersonas.value) > maximo) {
            // Excede la capacidad disponible
            console.log("No da la capacidad");
        }

    });

    // Fijar que la fecha minima de reserva sea hoy

    // Consigo la fecha actual
    let now = new Date();

    // Consigo: año, mes y dia
    let year = now.getFullYear();
    // Los completo con cero al principio para que sea MM/DD
    let month = (now.getMonth() + 1).toString().padStart(2, "0");
    let date = now.getDate().toString().padStart(2, "0");

    // Y si quiero que la fecha minima sea dentro de una semana?
    now.setDate(now.getDate() + 7);

    year = now.getFullYear();
    month = (now.getMonth() + 1).toString().padStart(2, "0");
    date = now.getDate().toString().padStart(2, "0");

    // Fijo el atributo minimo del calendario a la nueva
    document.querySelector("#fecha-check-in").setAttribute("min", `${year}-${month}-${date}`);

    // Fijo un maximo de fecha (una ventana de 14 dias quedan)
    now.setDate(now.getDate() + 14);

    year = now.getFullYear();
    month = (now.getMonth() + 1).toString().padStart(2, "0");
    date = now.getDate().toString().padStart(2, "0");

    // Fijo el atributo maximo del calendario
    document.querySelector("#fecha-check-in").setAttribute("max", `${year}-${month}-${date}`);
});