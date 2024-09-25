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

let libros = [];

// Intento leer el archivo json con los libros
fetch("libros.json").then(response => response.json()).then(libros => {

    // Una vez que tengo los libros, creo los objetos
    for(let libro of libros) {

        let obj = new Libro(
            libro.nombre,
            libro.autor,
            libro.editorial,
            libro.portada
        );

        // Lo agrego al array
        libros.push(obj);

    }
});