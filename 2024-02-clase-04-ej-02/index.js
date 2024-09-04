// Variables para almacenar los datos de las materias
let materias = [], notas = [];

// Pido el nombre del alumno
const alumno = validarString("Ingrese el nombre del alumno");

do {
    // Pido la materia y valido
    let materia = validarString("Ingrese el nombre de la materia");
    // Guardo la materia en su array
    materias.push(materia);
    // Pido nota y valido
    let nota = validarNota(`Ingrese la nota de final de ${materia}`);
    // Guardo la nota en su array
    notas.push(nota);

} while(confirm("Otra materia y nota para cargar?"));
