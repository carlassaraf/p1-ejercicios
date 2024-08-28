// No es necesariamente el parametro nombre
let nombre = "Jose";
let otroNombre = "Kiara";

function foo() {
    // Todo lo que va aca es lo que la funcion va a ejecutar cuando la llame
}

// Llamo la funcion
// saludar();

/**
 * Funcion que escribe 'Hola' por alert
 */
function saludar() {
    alert("Hola!");
}


/**
 * Funcion que saluda por alert
 * @param {String} nombre string con el nombre 
 * de la persona a saludar
 */
function saludarPorNombre(nombre = null) {

    if(nombre === null) {
        alert("Hola!");
    }
    else {
        alert(`Hola ${nombre}!`);
    }
}

// Paso parametro a la funcion
saludarPorNombre(nombre);
saludarPorNombre(otroNombre);
saludarPorNombre("Juan");

// Esto anda, se pasa el parametro como undefined
saludarPorNombre();