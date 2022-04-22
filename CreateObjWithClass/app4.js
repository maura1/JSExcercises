//Create an object with a class

class Person {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(this.name);
    }
}

let user = new Person('Monk');
user.greeting();

//Any method declared in the class is automatically added to the prototype
//In JS, a class is a kind-of function, and mputs the methods we create here in the prototype
