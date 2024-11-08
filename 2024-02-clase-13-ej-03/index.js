document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("form").addEventListener("submit", (e) => {
        // Evito que el formulario se mande y se refresque la pagina
        e.preventDefault();

        let username = document.querySelector("#username");
        let password = document.querySelector("#password");
        let email = document.querySelector("#email");

        // Validaciones

        if(username.value === "") {
            // Mensaje que apareceria flotando como una caja debajo del input
            username.setCustomValidity("No te olvides de llenar el campo de username!");
            // Con esto informo el custom validity
            // username.reportValidity();

            createWarning(e.target, "El campo de username esta vacio!");
        }
        else if(password.value.length < 8) {
            password.setCustomValidity("La contraseña debe tener por lo menos 8 caracteres");
            // password.reportValidity();
            createWarning(e.target, "La contraseña debe tener por lo menos 8 caracteres");
        }
        else if(!password.value.includes("!")) {

            createWarning(e.target, "La contraseña debe incluir '!'");
        }
        else if(!email.value.endsWith("@gmail.com")) {

            createWarning(e.target, "Solo se aceptan correos de Google");
        }


    });

    // Estos eventos se disparan cada vez que se cambia algo en el input

    document.querySelector("#username").addEventListener("input", (e) => {
        // El mensaje de validacion se tiene que limpiar para poder disparar el evento submit
        e.target.setCustomValidity("");
        deleteWarning();
    });

    document.querySelector("#password").addEventListener("input", (e) => {
        e.target.setCustomValidity("");
        deleteWarning();
    });

    document.querySelector("#email").addEventListener("input", (e) => {
        e.target.setCustomValidity("");
        deleteWarning();
    });
});

function deleteWarning() {

    let box = document.querySelector(".alert-warning");

    if(box) {
        box.remove();
    }
}

function createWarning(form, msg) {

    let box = document.createElement("div");
    box.setAttribute("class", "alert alert-warning");
    box.setAttribute("role", "alert");
    box.innerText = msg;
    form.append(box);
}