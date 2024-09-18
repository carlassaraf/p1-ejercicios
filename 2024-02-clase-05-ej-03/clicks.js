function cargarNombre() {
    // Pido y valido un string
    const nombre = validarString("Ingrese el nombre del alumno");
    // Paso el nombre al objeto alumno
    alumno.nombre = nombre;
    // Otra posibilidad
    // alumno["nombre"] = nombre;
}

function cargarMateria() {
    // Pido y valido string
    const nombre = validarString("Ingrese el nombre de la materia");
    // Pido y valido nota
    const nota = validarNota();
    // Creo un objeto materia
    const materia = {
        "nombre": nombre,
        "nota": nota
    };
    // Agrego materia al objeto alumno
    alumno.materias.push(materia);
}

function cargarAlumno() {
    // Agrego una funcion como propiedad
    alumno.toHTML = function() {
        // Variable de string vacia
        let str = "";
        // Agrego h1 con nombre del alumno
        str += `<h1>${this.nombre}</h1>\n`;
        str += `<h2>Materias</h2>\n`;
        // Creo un string auxiliar
        str +=  `<ul class="list-group">\n`;
        // Recorro las materias del alumno
        for(let materia of this.materias) {
            // Armo el li
            str += `<li class="list-group-item">${materia.nombre} - ${materia.nota}</li>\n`
        }
        // Cierro el ul
        str += `</ul>`;
        // Devuelvo str
        return str;
    }
    // Subo al alumno a la lista
    alumnos.push(alumno);
    // Inicializar un objeto nuevo
    alumno = {
        materias: []
    };
}

function mostrarLista() {
    /**
     * <h1>${alumno}</h1>
     * <h2>Materias</h2>
     * <ul class="list-group">
     *      <li class="list-group-item">${materia} - ${nota}</li>
     *      <li class="list-group-item">${materia} - ${nota}</li>
     *      <li class="list-group-item">${materia} - ${nota}</li>
     *      <li class="list-group-item">${materia} - ${nota}</li>
     * </ul>
     */

    // Traigo el primer elemento que sea de clase container
    const div = document.querySelector(".container");
    // Limpio HTML
    div.innerHTML = "";

    // Recorro la lista de alumnos

    // for(let i in alumnos) {
    //     // Agrego h1 con nombre de alumno
    //     div.innerHTML += `<h1>${alumnos[i].nombre}</h1>`;
    // }

    // Sin propiedad .mostrar
    // for(let alumno of alumnos) {
    //     // Agrego h1 con nombre del alumno
    //     div.innerHTML += `<h1>${alumno.nombre}</h1>`;
    //     div.innerHTML += `<h2>Materias</h2>`;
    //     // Creo un string auxiliar
    //     let str =  `<ul class="list-group">\n`;
    //     // Recorro las materias del alumno
    //     for(let materia of alumno.materias) {
    //         // Armo el li
    //         str += `<li class="list-group-item">${materia.nombre} - ${materia.nota}</li>\n`
    //     }
    //     // Cierro el ul
    //     str += `</ul>`;
    //     // Paso el string al html
    //     div.innerHTML += str;
    // }

    // Aprovechando la propiedad .mostrar de alumno
    for(let alumno of alumnos) {
        // Le paso al div el HTML que genera el propio objeto
        div.innerHTML += alumno.toHTML();
    }
}