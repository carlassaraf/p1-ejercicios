class Pelicula {


    constructor(nombre, portada, generos, publicacion) {

        this.nombre = nombre;
        this.portada = portada;
        this.generos = generos;
        this.publicacion = publicacion;

    }

    toHTML() {
/*

<div class="card" style="width: 18rem;">
  <img src="${this.portada}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${this.nombre}</h5>
    <p class="card-text">${this.publicacion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>

*/        

        let html = ``;
        html += `<div class="card" style="width: 18rem;">\n`;
        html += `<img src="${this.portada}" class="card-img-top">\n`
        html += `<div class="card-body">\n`;
        html += `<h5 class="card-title">${this.nombre}</h5>\n`;
        html += `<p class="card-text">${this.publicacion}</p>\n`;
        html += `</div>\n`;
        html += `<ul class="list-group list-group-flush">\n`;
        // Creo un li por cada genero en this.generos (Array)
        this.generos.forEach(genero => {
            html += `<li class="list-group-item">${genero}</li>\n`;
        });
        html += `</ul>\n`;
        html += `</div>\n`;

        return html;

    }
}