var numero = parseInt(prompt("Ingrese un número a convertir en letra :"));

while (numero != 0) {
    var resultado = convertir(numero);
    numero = parseInt(prompt("Ingrese un número a convertir en letra :"));
}


function convertir(n) {
    switch (n) {
        case 1:
            alert("El número " + numero + " es igual a la letra A");
            break;
        case 2:
            alert("El número " + numero + " es igual a la letra B");
            break;
        case 3:
            alert("El número " + numero + " es igual a la letra C");
            break;
        case 4:
            alert("El número " + numero + " es igual a la letra D");
            break;
        case 5:
            alert("El número " + numero + " es igual a la letra E");
            break;
        case 6:
            alert("El número " + numero + " es igual a la letra F");
            break;
        case 7:
            alert("El número " + numero + " es igual a la letra G");
            break;
        case 8:
            alert("El número " + numero + " es igual a la letra H");
            break;
        case 9:
            alert("El número " + numero + " es igual a la letra I");
            break;
        case 10:
            alert("El número " + numero + " es igual a la letra j");
            break;
        default:
            alert("El número " + numero + " no tiene equivalencia a letra");
            break;
    }
}