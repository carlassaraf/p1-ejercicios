// Defino un objeto
let alumno = {
    "nombre": "",
    "matricula": 1111,
    "materias_aprobadas": [],
    "materias cursando": []
};

// Agrego propiedades nuevas
alumno.fecha_de_nacimiento = "DD/MM/AA";
alumno["dni"] = 44444444;
alumno["es_regular"] = true;

// Esto no lo puedo hacer
// alumno.materias cursando;
// Se hace con corchetes
// alumno["materias cursando"]