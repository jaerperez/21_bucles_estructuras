var numero = prompt("Ingrese un número");
var contador = 0;
var t = 0;
while (numero != "salir") {
    let n = parseInt(numero);
    if (n < 10) {
        contador++;
        t = t + n;
    }
    numero = prompt("Ingrese un número");
}
alert("El promedio de los números de un dígito es: " + t / contador);
