class Libro {
    // Las propiedades privadas tienen que declararse antes
    #nombre;
    #autor;
    #editorial;
    #portada;

    constructor(nombre, autor, editorial, portada) {
        // Acá se asignan los valores
        this.#nombre = nombre;
        this.#autor = autor;
        this.#editorial = editorial;
        this.#portada = portada;
    }

    // Método privado
    #validarString(str) {
        
        return isNaN(str);
    }

    // Getter para la propiedad #nombre. Se usa como libro.nombre (como si fuera una propiedad pública)
    get nombre() {
        return `${this.#nombre} por ${this.#autor}`;
    }

    // Setter para la propiedad #nombre. Se usa como libro.nombre = "" (como si fuera una propiedad pública)
    set nombre(newNombre) {
        // Puedo aprovechar a validar antes de cambiar la propiedad
        if(this.#validarString(newNombre)) {
            this.#nombre = newNombre;
        }
    }
}

let libro = new Libro("El Hobbit", "JRR Tolkien", "Harper Collins");
// Esto es una propiedad pública
libro.autor = "JK Rowling";
// Esto es una propiedad privada (tira error)
// libro.#autor = "JK Rowling";
// Esto es un método privado (tira error)
// libro.#validarString("JK Rowling");