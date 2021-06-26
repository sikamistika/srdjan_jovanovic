function Person (name, surname) {
    this.name = name;
    this.surname = surname;
     
 }

 Person.prototype.getFullName = function (){
     return this.name + ' ' + this.surname;
 }

 Person.prototype.printInfo = function (){
    console.log(this.getFullName());
}

var pera = new Person ('Pera', 'Perić');
var ivan = new Person ('Ivan', 'Balić');
var jane = new Person ('Jane', 'Doe');


pera.printInfo();
ivan.printInfo();



console.log(pera, ivan);