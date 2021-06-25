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

// var pera = new Person ('Pera', 'Perić');
 //var ivan = new Person ('Ivan', 'Balić');
 //var jane = new Person ('Jane', 'Doe');



//jane.sayHello();

//ivan.sayHello();

function Player (name, surname, country, betAmount){
    Person.call(this, name, surname)
    this.country = country;
    this.betAmount = betAmount;
}

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;

Player.prototype.printInfo = function () {
    var fullName = this.getFullName();

    console.log(fullName + ' '+ this.country + ' ' + this.betAmount + ' euros');
}

var player1  = new Player('Pera', 'Perić', 'Srbija', 100);

player1.printInfo();