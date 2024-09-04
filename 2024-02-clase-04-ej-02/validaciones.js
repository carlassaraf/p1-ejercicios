/**
 * Pide y valida un string
 * @param {String} msg 
 * @returns un string validado
 */
function validarString(msg = "") {
    // Booleano para validar
    let datoValido;
    // Variable auxiliar
    let foo;

    do {
        // Pido y valido el nombre de la materia
        foo = prompt(msg);
        
        // Valido que no sea un numero
        if(!isNaN(foo)) {
            alert("Ingrese texto");
            datoValido = false;
        }
        else if(foo === null) {
            alert("Por favor, complete el campo");
            datoValido = false;
        }
        else if(foo.trim() === "") {
            alert("Por favor, no deje el campo vacio");
            datoValido = false;
        }
        else {
            datoValido = true;
        }

    } while(!datoValido);
    // Devuelvo el dato validado
    return foo;
}

/**
 * Pide y valida una nota
 * @param {String} msg 
 * @returns nota validada entre 4 y 10
 */
function validarNota(msg = "") {
    // Booleano para validar
    let datoValido;
    // Variable auxiliar
    let foo;

    do {
        foo = parseInt(prompt(msg));
        // Validaciones
        if(isNaN(foo)) {
            alert("Por favor, ingrese numeros");
            datoValido = false;
        }
        else if(foo < 4 || foo > 10) {
            alert("La nota debe ser entre 4 y 10");
            datoValido = false;
        }
        else {
            datoValido = true;
        }

    } while(!datoValido);
    // Devuelvo dato validado
    return foo;
}