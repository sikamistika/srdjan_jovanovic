function Person (name, surname) {
    this.name = name;
    this.surname = surname;
     
 }

 Person.prototype.getFullName = function (){
     return this.name + ' ' + this.surname;
 }

 Person.prototype.prinInfo = function (){
    console.log(this.getFullName());
}

Person.prototype.sayHello = function (){
    console.log('Hello my name is ' + this.name);
}

var pera = new Person ('Pera', 'Perić');
var ivan = new Person ('Ivan', 'Balić');
var jane = new Person ('Jane', 'Doe');


ivan.sayHello();
ivan.sayHello = function () {
    console.log('Zdravo narode');
}

jane.sayHello();

ivan.sayHello();