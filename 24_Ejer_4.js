class Person {
    constructor(id, name, lastname, email, user, age) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.user = user;
        this.age = age;
    }
    getid() {return this.id;}
    setid(value) {this.id=value;}
    getname(){return this.name;}
    setname(value){this.name=value;}
    getlastname(){return this.lastname;}
    setlastname(value){this.lastname=value;}
    getemail(){return this.email;}
    setemail(value){this.email=value;}
    getuser(){return this.user;}
    setuser(value){this.user=value;}
    getage(){return this.age;}
    setage(value){this.age=value;}
    getinf() {
        return "Estos son los nuevos datos "+'\n'+this.id+'\n'+ this.name+'\n'+ this.lastname+'\n'+ this.email+'\n'+ this.age;
    }


}

let user1 = new Person(1144141, "Pepito", "perez", "h@gmail.com", "Pep03", 23);
let user2 = new Person(1144142, "Camila", "perez", "h@gmail.com", "cami03", 23);
let user3 = new Person(1144143, "Andres", "perez", "h@gmail.com", "andres03", 32);
let user4 = new Person(1144144, "Carlos", "perez", "h@gmail.com", "carlos03", 23);
let user5 = new Person(1144145, "Jose", "perez", "h@gmail.com", "Jose03", 23);
let user6 = new Person(1144146, "Emma", "perez", "h@gmail.com", "Emma03", 23);
let users = [user1, user2, user3, user4, user5, user6];



function update_user() {
    let result = confirm("Desea actualizar los datos del usuario? ");
    if (result) {
        let id = prompt("Ingrese identificación de usuario para su actualización de datos: ");
        for (let i = 0; i < users.length; i++) {
            let n = users[i].getid();
            if (n == id) {
                let new_id = prompt("Ingrese nueva identificación de usuario: ");
                users[i].setid(new_id);
                let new_name= prompt("Ingrese nuevo nombre de usuario: ");
                users[i].setname(new_name);
                let new_lastname= prompt("Ingrese nuevo apellido de usuario: ");
                users[i].setlastname(new_lastname);
                let new_email= prompt("Ingrese nuevo email de usuario: ");
                users[i].setemail(new_email);
                let new_user= prompt("Ingrese nuevo usuario: ");
                users[i].setuser(new_user);
                let new_age= prompt("Ingrese nueva edad: ");
                users[i].setage(new_age);
                alert(users[i].getinf());
            }
        }

    } else {
        alert("User already exists");

    }
}

console.log(users);
update_user();
console.log(users);


