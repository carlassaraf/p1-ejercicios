// Pido datos por prompt
let categoria = parseInt(prompt("Ingrese categoria (1, 2 o 3) para salarios de usd 1000, usd 1500 y usd 2000"));
let subcategoria = prompt("Elija la subcategoria (A, B o C) para multiplicadores de 1.5, 2 y 2.5");

let sueldo = 1000;
// Asigno sueldo segun la categoria
if(categoria == 1) {
    sueldo = 1000;
}
else if(categoria == 2) {
    sueldo = 1500;
}
else if(categoria == 3) {
    sueldo = 2000;
}

// Multiplicador de acuerdo a la subcategoria
switch(subcategoria.toUpperCase()) {

    case "A":
    sueldo = sueldo * 1.5;
    break;

    case "B":
    sueldo = sueldo * 2;
    break;

    case "C":
    sueldo *= 2.5;
    // Es lo mismo que sueldo = sueldo * 2.5;
    break;

    default:
    sueldo = 0;
    break;
}


if(sueldo >= 1500 || sueldo <= 3000) {
    alert(`El sueldo de $${sueldo} es de rango incial`);
}
else if(sueldo > 3000 && sueldo <= 4000) {
    alert(`El sueldo de $${sueldo} es de rango intermedio`);
}
else if(sueldo > 4000) {
    alert(`El sueldo de $${sueldo} es de rango avanzado`);
}