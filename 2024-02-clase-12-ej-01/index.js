// Guardo variables en localStorage

let usuario = "carlassaraf";
let passwd = "12345678";
let edad = 27;
let carrito = ["Tomates", "Yerba", "Chocolate Cofler"];

// Todo se guarda como string

localStorage.setItem("usuario", usuario);
localStorage.setItem("passwd", passwd);
localStorage.setItem("edad", edad);

// Esto se guarda como string, no array
localStorage.setItem("carrito", carrito);

// Edad va a ser un string

usuario = localStorage.getItem("usuario");
passwd = localStorage.getItem("passwd");
edad = parseInt(localStorage.getItem("edad"));

carrito = localStorage.getItem("carrito");
// Resultado: "Tomates,Yerba,Chocolate Cofler"

// Se puede resolver con .spli()
carrito = carrito.split(",");

// Otra mejor forma
localStorage.setItem("carrito", JSON.stringify(carrito));
// JSON.stringify devuelve: "[\"Tomates\",\"Yerba\",\"Chocolate Cofler\"]"
carrito = JSON.parse(localStorage.getItem("carrito"));
// JSON.parse devuelve: ["Tomates", "Yerba", "Chocolate Cofler"]

// Y con Objetos?
let yo = {
    "nombre": "Fabrizio",
    "apellido": "Carlassara",
    "edad": 27,
    "vivo": true
};

// Se guarda [object Object]
localStorage.setItem("yo", yo);
localStorage.getItem("yo");

// Se guarda: "{\"nombre\":\"Fabrizio\",\"apellido\":\"Carlassara\",\"edad\":27,\"vivo\":true}"
localStorage.setItem("yo", JSON.stringify(yo));
// Devuelve el objeto original con los tipos de datos que van
yo = JSON.parse(localStorage.getItem("yo"));

// Para eliminar elementos

// Uno en particular
// localStorage.removeItem("carrito");
// Todo localStorage
// localStorage.clear();

document.addEventListener("DOMContentLoaded", () => {

    // Verifico que haya o no un carrito en localStorage
    if(localStorage.getItem("carrito") !== null) {
        // Entonces hay algo en el localStorage
        let carrito = localStorage.getItem("carrito");
        console.log(carrito);
    }
    else {
        alert("No hay nada en el carrito");
    }

});

// Y con clases que pasa?

let persona = new Persona(yo.nombre, yo.apellido, yo.edad, yo.vivo);

// Se guarda como un objeto normal, solo se pasan las propiedades
localStorage.setItem("persona", JSON.stringify(persona));
// Lo recupero como objeto
persona = JSON.parse(localStorage.getItem("persona"));

// Vuelvo a crear la instancia de clase
persona = new Persona(persona.nombre, persona.apellido, persona.edad, persona.vivo);
