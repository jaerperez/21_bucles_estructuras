var numero = prompt("Ingrese un número :");
var total_i = 0;
var total_p = 0;
while (numero != 0) {
    var num = parseInt(numero);
    if (num % 2 == 0) {
        total_p++;
    } else {
        total_i++;
    }
    numero = prompt("Ingrese un número :");
}
if (total_i > total_p) {
    alert("Total números Impares: " + total_i + " Total números pares: " + total_p + " Los números más ingresados fueron los impares");
} else if (total_i < total_p) {
    alert("Total números Impares: " + total_i + " Total números pares: " + total_p + " Los números más ingresados fueron los pares");
} else {
    alert("Total números Impares: " + total_i + " Total números pares: " + total_p + " Se ingresaron por igual tanto pares cómo impares");
}

