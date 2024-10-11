let peliculas;

// Leo el archivo .json
fetch("peliculas.json")
.then(response => response.json())
.then(json => {
    // Convierto lo que leo del JSON en instancias de Pelicula
    peliculas = json.map(pelicula => new Pelicula(pelicula.nombre, pelicula.portada, pelicula.generos, pelicula.publicacion))

    // Array con generos sin repetir
    let generos = [];

    peliculas.forEach(pelicula => {
        // Por cada pelicula, miro sus generos
        pelicula.generos.forEach(genero => {
            // Veo si el genero ya lo tengo en el array
            if(generos.includes(genero) === false) {
                // Si no lo tengo, lo incluyo
                generos.push(genero);
            }

        })

    });

    // Ya tengo mi lista de generos para filtrar

    // Por cada genero, creo un option
    generos.forEach(genero => {
        // Agrego un option al select de filtros
        document.querySelector("#filtros").innerHTML += `<option value="${genero}">${genero}</option>;`
    })
});


function sort() {
    
    let sorted;
    // Del select, agarro que se selecciono
    const criterio = document.querySelector("select").value;
    
    switch(criterio) {

        case "A - Z":
            sorted = peliculas.sort((a, b) => {

                if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                    return -1;
                }
                else if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
            break;

        case "Z - A":
            sorted = peliculas.sort((a, b) => {

                if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                    return 1;
                }
                else if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
            break;

        case "Año":
            sorted = peliculas.sort((a, b) => a.publicacion - b.publicacion);
            break;
    }

    // Agarro el elemento donde quiero mostrar las peliculas
    const container = document.querySelector(".container");
    // Limpio el HTML dentro de container
    container.innerHTML = "";
    // Por cada pelicula en peliculas, muestro una tarjeta
    peliculas.forEach(pelicula => container.innerHTML += pelicula.toHTML());

}


function filter() {
    // Veo que opcion se eligio
    const genero = document.querySelector("#filtros").value;
    // Filtro por genero para tener solo peliculas que lo contengan
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.generos.includes(genero));

    // Agarro el elemento donde quiero mostrar las peliculas
    const container = document.querySelector(".container");
    // Limpio el HTML dentro de container
    container.innerHTML = "";
    // Por cada pelicula en peliculas, muestro una tarjeta
    peliculasFiltradas.forEach(pelicula => container.innerHTML += pelicula.toHTML());
}