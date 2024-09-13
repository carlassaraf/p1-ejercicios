function cargarNombre() {
    // Pido y valido un string
    const nombre = validarString("Ingrese el nombre del alumno");
    // Paso el nombre al objeto alumno
    alumno.nombre = nombre;
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
    // Subo al alumno a la lista
    alumnos.push(alumno);
    // Inicializar un objeto nuevo
    alumno = {
        materias: []
    };
}

function mostrarLista() {
    // TODO
}