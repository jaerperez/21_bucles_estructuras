class Persona {
    constructor(nombre, apellido, email, usuario, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.usuario=usuario;
        this.edad = edad;
    }

    getusuario() {
        return this.usuario;
    }

}

let usuario1 = new Persona("Pepito", "perez", "h@gmail.com", "Pep03", 23);
let usuario2 = new Persona("Camila", "perez", "h@gmail.com", "cami03", 23);
let usuario3 = new Persona("Andres", "perez", "h@gmail.com", "andres03", 32);
let usuario4 = new Persona("Carlos", "perez", "h@gmail.com", "carlos03", 23);
let usuario5 = new Persona("Jose", "perez", "h@gmail.com", "Jose03", 23);
let usuario6 = new Persona("Emma", "perez", "h@gmail.com", "Emma03", 23);

let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6];

let nom = prompt("Ingrese su nombre de usuario");

function valnombre(nombre){
    try {
        for (let i = 0; i < usuarios.length; i++) {
            let n = usuarios[i].getusuario();
            if (n == nombre) {
              throw new Error("El nombre de usuario ya existe");
            }
        }
        alert("Bienvenido: "+ nombre);
    } catch (error) {
        alert(error);
    }
}

valnombre(nom);