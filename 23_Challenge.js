class perro {

    constructor(nombre, raza, edad, sexo, estado) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.sexo = sexo;
        this.estado = estado;
    }

    informar() {
        alert("El estado del perro es" + this.estado);

    }

}


let perro1 = new perro("Capo", "Barbet", 2, true, "E");
let perro2 = new perro("Mango", "Beagle", 2, false, "A");


console.log(perro2.informar());