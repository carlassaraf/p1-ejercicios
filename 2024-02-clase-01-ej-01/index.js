// Pido dos extremos para comparar
const max = parseInt(prompt("Ingrese el maximo para comparar"));
const min = parseInt(prompt("Ingrese el minimo para comparar"));

// Pido el numero para comparar
const num = parseInt(prompt("Ingrese el numero a comparar"));

// Verifico si el numero esta en rango
if(num >= min && num <= max) {
    // Entro aca solo si esta entre el maximo y el minimo
    alert("El numero esta en rango");
}
else {
    alert("El numero no esta en rango")
}

// Pregunto si es par

if(num % 2 == 1) {
    // Es impar porque tiene resto 1
    alert("El numero es impar");
}
else {
    // Es par porque el resto fue 0
    alert("El numero es par");
}

// Otra forma

// Preguntar primero si es mayor al minimo
if(num >= min) {
    // Si lo anterior se dio, hacemos la otra pregunta
    if(num <= max) {
        // Esta en rango
    }
    else {
        // No esta en rango
    }
}
else {
    // No esta en rango
}