function capitalize(str) {
    // Separo la primer letra del resto
    let first = str.charAt(0);
    let rest = str.slice(1);
    // Cambio la primera por mayuscula
    first = first.toUpperCase();
    // Me aseguro que el resto este en minuscula
    rest = rest.toLowerCase();
    // Concateno y devuelvo
    return first.concat(rest);
}

String.prototype.capitalize = function() {

    return this.charAt(0).toUpperCase().concat(this.substring(1).toLowerCase());
}