// function Person (name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }


// Person.prototype.getFullName = function () {
//     return this.name + ' ' + this.surname + ' ' + this.age + ' years old';
// }

// Person.prototype.printInfo = function () {
//     console.log(this.getFullName());
// }

// var pera = new Person ('Pera', 'Perić', 20, function  (age) {
//     return age;
// });

// var ivan = new Person  ('Ivan', 'Balić', 30);

// pera.printInfo();

// (function () {
//     console.log('Hi');
// }) ();

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
getRandomArbitrary(0,1);
  
