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
            createWarning("El campo de cantidad de personas es obligatorio");
            return;
        }
        else if(parseInt(cantidadPersonas.value) < 1) {
            // Por lo menos reservar para una persona
            createWarning("Por lo menos debe reservar para una persona");
            return;
        }
        else if(parseInt(cantidadPersonas.value) > maximo) {
            // Excede la capacidad disponible
            createWarning(`No temos capacidad para ${cantidadPersonas.value} personas`);
            return;
        }

        // Valido select de habitaciones

        if(habitacion.value === "") {
            // Campo obligatorio
            createWarning("Por favor, elija un tipo de habitación");
            return;
        }

        // Actualizo el monto de pago

        updatePrecio();

    });

    // Fijar que la fecha minima de reserva sea hoy

    // Consigo la fecha actual
    let now = new Date();

    // Necesito armar la fecha con el formato: YYYY-MM-DD

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

    // Limpio los warnings cada vez que modifico los inputs, si los hay
    document.querySelector("#cantidad-personas").addEventListener("input", () => deleteWarning());
    document.querySelector("#habitacion").addEventListener("input", () => deleteWarning());

    // Administro metodos de pago
    document.querySelector("#pago").addEventListener("input", (e) => {
        // Chequeo que haya un precio cerrado al que aplicarle descuento
        let precio = document.querySelector(".alert-info p span");
        if(precio.innerText === "0") {
            createWarning("Por favor, primero complete los datos de la habitacion");
            return;
        }

        if(e.target.value === "transferencia") {

            precio.innerText = `${(parseInt(precio.innerText) * 0.9).toFixed(2)}`;

            let cuotas = document.querySelector("#cuotas");
            if(cuotas) { cuotas.parentElement.remove(); }
        }
        else if(e.target.value === "credito") {
            // Cambio el precio al real
            updatePrecio();
            // Capturo el precio total
            let total = parseInt(precio.innerText);

            let div = document.createElement("div");
            div.setAttribute("class", "input-group mb-3");
           
            let span = document.createElement("span");
            span.setAttribute("class", "input-group-text");
            span.innerText = "Cuotas a pagar";

            let select = document.createElement("select");
            select.setAttribute("id", "cuotas");
            select.setAttribute("class", "form-select");

            let option1 = document.createElement("option");
            option1.setAttribute("value", "");
            option1.innerText = "Elija las cuotas a pagar";

            let option2 = document.createElement("option");
            option2.setAttribute("value", "3");
            option2.innerText = `3 cuotas de $${(total / 3).toFixed(2)}`;

            let option3 = document.createElement("option");
            option3.setAttribute("value", "6");
            option3.innerText = `6 cuotas de $${(total / 6).toFixed(2)}`;

            let option4 = document.createElement("option");
            option4.setAttribute("value", "9");
            option4.innerText = `9 cuotas de $${(total / 9).toFixed(2)}`;

            select.append(option1, option2, option3, option4);
            div.append(span, select);
            document.querySelector("form").append(div);
        }

    });

});

function createWarning(msg) {
    // Creo el elemento para el warning
    let div = document.createElement("div");
    div.setAttribute("class", "alert alert-warning");
    div.setAttribute("role", "alert");
    div.innerText = msg;
    // Lo agrego al principio del formulario
    document.querySelector("form").prepend(div);
}

function deleteWarning() {
    // Reviso si hay alguna caja de warning
    let warning = document.querySelector(".alert-warning");
    if(warning) {
        warning.remove();
    }
}

function updatePrecio() {
    // Capturo todos los inputs
    let cantidadPersonas = document.querySelector("#cantidad-personas");
    let habitacion = document.querySelector("#habitacion");
    document.querySelector(".alert-info p span").innerHTML = `${(habitacion.value * cantidadPersonas.value).toFixed(2)}`;
}