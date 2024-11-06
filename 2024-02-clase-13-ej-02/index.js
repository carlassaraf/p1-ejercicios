let imgs = [
    "https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/12/28/658d3cc8a1698.jpeg",
    "https://www.ngenespanol.com/wp-content/uploads/2024/03/estos-son-los-animales-que-no-deberias-tener-como-mascotas.jpg",
    "https://www.tiendanimal.es/articulos/wp-content/uploads/2023/05/coyote.jpg"
];

// Selecciono una imagen al azar de la lista
let index = Math.floor(Math.random() * imgs.length);


function callback() {
    // Trato de ir a la imagen siguiente
    index++;
    // Si me pase, vuelvo a la primera
    if(index > imgs.length - 1) {
        index = 0;
    }
    // Cambio de imagen
    document.querySelector("img").setAttribute("src", imgs[index]);
}

document.addEventListener("DOMContentLoaded", () => {

    let img = document.querySelector("img");
    img.setAttribute("src", imgs[index]);

    let interval = setInterval(callback, 4000);

    document.querySelector("#previous").addEventListener("click", () => {
        // Limpio el interval
        clearInterval(interval);
        // Trato de ir a la imagen anterior
        index--;
        // Si no hay, voy a la ultima
        if(index < 0) {
            index = imgs.length - 1;
        }

        // Cambio de imagen
        img.setAttribute("src", imgs[index]);
        // Configuro el interval de nuevo
        interval = setInterval(callback, 4000);
    });

    document.querySelector("#next").addEventListener("click", () => {
        // Limpio el interval
        clearInterval(interval);
        // Trato de ir a la imagen siguiente
        index++;
        // Si ya no hay, voy a la primera
        if(index > imgs.length - 1) {
            index = 0;
        }

        // Cambio de imagen
        img.setAttribute("src", imgs[index]);
        // Configuro el interval de nuevo
        interval = setInterval(callback, 4000);
    });

});
