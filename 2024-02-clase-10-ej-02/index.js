// Asocio un event listener para cuando la pagina se carga
document.addEventListener("DOMContentLoaded", () => {
    
    // A partir de aca, todo el contenido de la pagina esta cargado
    
    // Busco el primer li y cambio el innerHTML
    document.querySelector("li").innerHTML = "<strong>Bold item</strong>";

    // Busco el boton y le agrego un event listener para click
    document.querySelector("button").addEventListener("click", () => alert("Boton clickeado!"));

});