// <li class="list-group-item">An item</li>

document.addEventListener("DOMContentLoaded", () => {

    // Busco el button y le agrego un evento al click
    document.querySelector("button").addEventListener("click", () => {
        // Encuentro el input
        let input = document.querySelector("input");
        // Encuentro el ul donde va el li nuevo
        let ul = document.querySelector("ul");
        // Creo el li
        let li = document.createElement("li");
        li.setAttribute("class", "list-group-item custom-li");
        li.innerText = input.value;
        // Creo el button
        let btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "btn btn-danger");
        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>`;
        // Agrego un evento de click
        btn.addEventListener("click", (e) => {
            // Esto va a pasar con cada boton

            // Encuentro el responsable del evento (button)
            let button = e.currentTarget;
            // Encuentro al padre del button (li)
            let li = button.parentElement;
            // Elimino el li
            li.remove();
        });

        // Creo boton de up
        let up = document.createElement("button");
        up.setAttribute("type", "button");
        up.setAttribute("class", "btn btn-secondary");
        up.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>`;
        up.addEventListener("click", (e) => {
            // Encontrar el li que tengo que mover (padre de e.target o sea padre de button)
            let li = e.currentTarget.parentElement;
            // Veo si hay algun sibling anterior
            if(li.previousElementSibling !== null) {
                // Como hay uno anterior, muevo li antes de ese
                li.previousElementSibling.before(li);
            }
        });

        // Creo boton de down
        let down = document.createElement("button");
        down.setAttribute("type", "button");
        down.setAttribute("class", "btn btn-secondary");
        down.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>`;
        down.addEventListener("click", (e) => {
            // Encontrar el li que tengo que mover (padre de e.target o sea padre de button)
            let li = e.currentTarget.parentElement;
            // Veo si hay algun sibling posterior
            if(li.nextElementSibling !== null) {
                // Como hay uno posterior, muevo li antes de ese
                li.nextElementSibling.after(li);
            }
        });

        // Agrego el button al li
        li.append(up);
        li.append(down);
        li.append(btn);

        // Agrego el li al ul
        ul.append(li);

        // Limpio el input
        input.value = "";
    });

});
