document.addEventListener("DOMContentLoaded", () => {

    fetch("summary.json")
    .then(response => response.json())
    .then(productos => {

        productos.forEach(producto => {

            let card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("style", "width: 18rem");
            // Se traduce como un atributo data-pid
            card.dataset.pid = producto.pid;
            // Se traduce como data-product-id
            // card.dataset.productId = producto.pid;
            // card.dataset["productId"] = producto.pid;

            let img = document.createElement("img");
            img.setAttribute("src", producto.img);
            img.setAttribute("alt", producto.name);

            let body = document.createElement("div");
            body.setAttribute("class", "card-body");

            let title = document.createElement("h5");
            title.setAttribute("class", "card-body");
            title.innerText = producto.name;

            let price = document.createElement("p");
            price.setAttribute("class", "card-text");
            price.innerText = `$${producto.price}`;

            let details = document.createElement("a");
            details.setAttribute("class", "btn btn-primary");
            details.innerText = "Mostrar detalles";
            details.addEventListener("click", (e) => {
                // Voy hasta la card
                let card = e.target.parentElement.parentElement;
                // Consigo el data-pid
                let pid = card.dataset.pid;
                // Busco el resto de la informacion
                fetch("details.json")
                .then(response => response.json())
                .then(detalles => {
                    // Me quedo solamente con el del pid que busco
                    let detalle = detalles.filter(item => item.pid == pid)[0].details;
                    console.log(detalle);
                });
            });

            body.append(title, price, details);
            card.append(img, body);
            document.querySelector(".container").append(card);

        });
    });
})