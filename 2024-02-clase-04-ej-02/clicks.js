function cargarAlumno() {
    // Pido el nombre del alumno
    alumno = validarString("Ingrese el nombre del alumno");
}

function cargarMateria() {
    // Pido la materia y valido
    let materia = validarString("Ingrese el nombre de la materia");
    // Guardo la materia en su array
    materias.push(materia);
    // Pido nota y valido
    let nota = validarNota(`Ingrese la nota de final de ${materia}`);
    // Guardo la nota en su array
    notas.push(nota);
}

function mostrar() {
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

    // Encuentro el container (div)
    const container = document.querySelector(".container");
    // Limpio el container
    container.innerHTML = "";
    // Creo el h1 con el nombre del alumno
    container.innerHTML += `<h1>${alumno}</h1>`;
    container.innerHTML += `<h2>Materias</h2>`;
    // Creo la lista (se cierra automáticamente)
    container.innerHTML += `<ul class="list-group">`;
    // Encuentro la lista que generé recién
    const ul = document.querySelector("ul");
    // Agrego las materias
    
    // Con un for normal
    // for(let i = 0; i < materias.length; i++) {
    //     ul.innerHTML += `<li class="list-group-item">${materias[i]} - ${notas[i]}</li>`;
    // }

    // Con un for in
    for(let i in materias) {
        ul.innerHTML += `<li class="list-group-item">${materias[i]} - ${notas[i]}</li>`;
    }

    // Con un for of (a medias anda)
    // for(let materia of materias) {
    //     ul.innerHTML += `<li class="list-group-item">${materia}</li>`;
    // }
}