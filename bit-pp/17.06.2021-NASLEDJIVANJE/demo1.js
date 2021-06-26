function Person (name, surname) {
    this.name = name;
    this.surname = surname;
    this.sayHello = function (){
        console.log('Hello! My name is ' + this.name);
    }
}

// Person.prototype.sayHello = function (){
//     console.log('Hello! My name is ' + this.name);
// }

var pera = new Person ('Pera', 'Perić');
var ivan = new Person ('Ivan', 'Balić');
var jane = new Person ('Jane', 'Doe');

jane.sayHello();

console.log(pera, ivan, jane);