class Biblioteca {

    constructor() {
        // Creo la propiedad como Array vacio
        this.libros = [];
        // Intento leer el archivo (asincrónico)
        fetch("libros.json")
        .then(response => response.json())
        .then(libros => {
            // Recorro lo que leí del archivo
            for(let libro of libros) {
                // 
                const book = {
                    "stock": Math.ceil(10 * Math.random()),
                    "libro": new Libro(
                        libro.nombre,
                        libro.autor,
                        libro.editorial,
                        libro.portada
                    )
                };
                // 
                this.libros.push(book);
            }
        });
    }

    toHTML() {

        let html = "";
        // Recorro la propiedad libros (Array de Libro)
        for(let obj of this.libros) {
            // Llamo al metodo toHTML de Libro
            html += obj.libro.toHTML();
        }

        return html;
    }

    pedirLibro(nombre) {
        // Recorro todo el catalogo de libros
        for(let obj of this.libros) {
            // Miro el libro
            const libro = obj.libro;
            // Veo si coincide con el nombre solicitado
            if(libro.nombre === nombre) {
                // Resto stock
                obj.stock--;
                return obj.stock;
            }
        }
    }

    devolverLibro(nombre) {
        // Recorro todo el catalogo de libros
        for(let obj of this.libros) {
            // Miro el libro
            const libro = obj.libro;
            // Veo si coincide con el nombre solicitado
            if(libro.nombre === nombre) {
                // Aumento stock
                obj.stock++
                return obj.stock;
            }
        }
    }

    nuevoLibro() {
        // Pedir y validar
        // - nombre
        // - autor
        // - editorial
        // - portada

        let nombre = Libro.pedirNombre();
        let autor = Libro.pedirAutor();
        let editorial = Libro.pedirEditorial();
        let portada = Libro.pedirPortada();
        // Con los cuatro datos, puedo crear la instancia del Libro
        let libro = new Libro(nombre, autor, editorial, portada);

        const book = {
            "stock": Math.ceil(10 * Math.random()),
            "libro": libro
        };
        // 
        this.libros.push(book);
    }

    buscarPorNombre() {
        // Pido el nombre para validar
        let nombre = Libro.pedirNombre();
        // Aplico filtro por nombre
        let resultados = this.libros.filter(obj => obj.libro.nombre.toLowerCase() === nombre.toLowerCase());

        let html = "";
        // Veo si hay resultados
        if(resultados.length != 0) {
            // Armo el HTML de los libros
            resultados.forEach(res => {
                // Veo el libro y lo convierto a HTML
                html += res.libro.toHTML();
            });
        }
        else {
            html += `<div class="alert alert-warning" role="alert">\n`
            html += `A simple warning alert—check it out!\n`;
            html += `</div>\n`;        
        }

        document.querySelector(".container").innerHTML = html;
    }
}