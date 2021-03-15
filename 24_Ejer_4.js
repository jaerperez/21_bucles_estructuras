class Person {
    constructor(id, name, lastname, email, user, age) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.user = user;
        this.age = age;
    }
    getid() { return this.id; }
    setid(value) { this.id = value; }
    getname() { return this.name; }
    setname(value) { this.name = value; }
    getlastname() { return this.lastname; }
    setlastname(value) { this.lastname = value; }
    getemail() { return this.email; }
    setemail(value) { this.email = value; }
    getuser() { return this.user; }
    setuser(value) { this.user = value; }
    getage() { return this.age; }
    setage(value) { this.age = value; }
    toString() {
        return "Estos son los nuevos datos " + '\n' + this.id + '\n' + this.name + '\n' + this.lastname + '\n' + this.email + '\n' + this.age;
    }

}

let user1 = new Person(1144141, "Pepito", "perez", "h@gmail.com", "Pep03", 23);
let user2 = new Person(1144142, "Camila", "perez", "h@gmail.com", "cami03", 23);
let user3 = new Person(1144143, "Andres", "perez", "h@gmail.com", "andres03", 32);
let user4 = new Person(1144144, "Carlos", "perez", "h@gmail.com", "carlos03", 23);
let user5 = new Person(1144145, "Jose", "perez", "h@gmail.com", "Jose03", 23);
let user6 = new Person(1144146, "Emma", "perez", "h@gmail.com", "Emma03", 23);
let users = [user1, user2, user3, user4, user5, user6];

function check_usernew(id) {
    for (let i = 0; i < users.length; i++) {
        let id_person = users[i].getid();
        if (id_person == id) {
            return i;
        }
    }
    return -1;
}

function update_user(objeto_persona) {

    let new_id = prompt("Ingrese nueva identificación de usuario: ");
    objeto_persona.setid(new_id);
    let new_name = prompt("Ingrese nuevo nombre de usuario: ");
    objeto_persona.setname(new_name);
    let new_lastname = prompt("Ingrese nuevo apellido de usuario: ");
    objeto_persona.setlastname(new_lastname);
    let new_email = prompt("Ingrese nuevo email de usuario: ");
    objeto_persona.setemail(new_email);
    let new_user = prompt("Ingrese nuevo usuario: ");
    objeto_persona.setuser(new_user);
    let new_age = prompt("Ingrese nueva edad: ");
    objeto_persona.setage(new_age);
    alert(objeto_persona.toString());
}



function update() {
    let result = confirm("Desea actualizar los datos del usuario? ");
    if (result) {
        let id = prompt("Ingrese identificación de usuario para su actualización de datos: ");
        let pos= check_usernew(id);
        if(pos>=0){
            let person=users[pos];
            update_user(person);
        }else alert ("Usuario no encontrado"); 
    }
}


update();
console.log(users);


