let peliculas;

// Leo el archivo .json
fetch("peliculas.json")
.then(response => response.json())
.then(json => peliculas = json);


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

    console.log(sorted);
}