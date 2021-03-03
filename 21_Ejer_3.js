var edad = prompt("Ingrese una edad");
var contador = 0;
while (edad != "0") {
	let e = parseInt(edad);
	if (e >= 18) {
		contador++;
	}
	edad = prompt("Ingrese una edad");
}

if (contador > 1) {
	alert("hay " + contador + " mayores de edad");
} else {
	alert("hay " + contador + " mayor de edad");
}