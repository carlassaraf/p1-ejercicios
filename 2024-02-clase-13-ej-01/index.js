/*
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
*/

let publicidades = [
    "2x1 en todos los productos seleccionados",
    "20% de descuento pagando en efectivo",
    "Hasta 9 cuotas sin interes con todos los Bancos adheridos",
    "10% de descuento con transferencia bancaria"
];

function callback(a, b) {

    console.log(a);
    console.log(b);
}

// Ejemplo de timeout con parametros
let timeout = setTimeout(callback, 5000, "Param 1", "Param 2");



document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("button").addEventListener("click", () => {

        clearTimeout(timeout);
    });

    // Selecciono una publicidad al azar
    let publicidad = publicidades[Math.floor(Math.random() * publicidades.length)]
    // Asigno al alert
    document.querySelector(".alert").innerHTML = publicidad;
    // Programo el timeout
    let timeout = setTimeout(() => {
        // Elimino la publicidad
        document.querySelector(".alert").remove()
    }, 4000);

    // Agrego un boton para cerrar la publicidad
    let close = document.createElement("button");
    close.setAttribute("class", "btn btn-info");
    close.setAttribute("type", "button");
    close.innerText = "X";
    close.addEventListener("click", (e) => {
        // Elimina toda la publicidad
        e.target.parentElement.remove();
        // Limpio el timeout
        clearTimeout(timeout);
    });
    document.querySelector(".alert").append(close);
})