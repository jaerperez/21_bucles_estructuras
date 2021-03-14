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
function check_usuario(nombre){
        for (let i = 0; i < usuarios.length; i++) {
            let n = usuarios[i].getusuario();
            if (n == nombre) {
                return false;
            }
        }
		return true;
}
function agregar_usuario (){
	let result =confirm("Quiere crear un nuevo usuario ?");
	if (result){
		let user = prompt("Ingrese nombre de usuario");
		if (check_usuario(user)){
			let nombre = prompt("ingrese nombre");
			let apellido = prompt("ingres apellido"); 
			let email = prompt("ingrese email"); 
			let edad = prompt("ingrese edad");
			let nuevo_user = new Persona (nombre,apellido,email,user,edad);
			usuarios.push(nuevo_user);
		}else{
		alert ("el usuario ya existe");
		}
	}
}
console.log(usuarios);
agregar_usuario();
console.log(usuarios);