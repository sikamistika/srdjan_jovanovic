function Person (name, surname) {
    this.name = name;
    this.surname = surname;
     this.sayHello = function (){
         console.log('Hello from constructor ');
     }
 }

 Person.prototype.sayHello = function (){
     console.log('Hello from prototype!');
 }

var pera = new Person ('Pera', 'Perić');
var ivan = new Person ('Ivan', 'Balić');
var jane = new Person ('Jane', 'Doe');

jane.sayHello();
pera.sayHello();
ivan.sayHello();

console.log(pera, ivan, jane);