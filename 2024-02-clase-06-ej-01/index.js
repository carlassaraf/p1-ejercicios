// class Alumno {

//     constructor(nombre, dni) {
//         // Propiedades publicas
//         this.nombre = nombre;
//         this.dni = dni;
//     }

//     getName() {
//         return this.nombre;
//     }

//     setName(nombre) {
//         this.nombre = nombre;
//     }
// }

// Llamo al contructor de Biblioteca
let biblioteca = new Biblioteca();

function mostrarCatalogo() {

    document.querySelector(".container").innerHTML = biblioteca.toHTML();
}

function pedirLibro(nombre) {

    alert(`Quedan ${biblioteca.pedirLibro(nombre)} libros de ${nombre}`);
}

function devolverLibro(nombre) {

    alert(`Quedan ${biblioteca.devolverLibro(nombre)} libros de ${nombre}`);
}