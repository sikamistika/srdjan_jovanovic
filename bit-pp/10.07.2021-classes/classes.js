// function createBird (name, color){
//     var newBird = {};
//     newBird.name = name;
//     newBird.color = color;

//     return newBird;
// }

// var slavuj = createBird('Slavuj', 'brown');

// console.log(slavuj);

// function Bird(name, color){
//     // const newObj = {}
//     this.name = name;
//     this.color = color;
// }

// Bird.prototype.sing = function (){
//     console.log('Bla, bla, bla, bla');
// }

// Bird.prototype.eat = function (){
//     console.log('Njam njam');
// }

// function Vrabac(color, weight) {
//     Bird.call(this, 'Vrabac', color);
// }

// Vrabac.prototype = Object.create(Bird.prototype);
// Vrabac.prototype.constructor = Vrabac;

// Vrabac.prototype.sing = function (){
//     console.log('Cvrk cvrk')
// }

// var constructorSlavuj = new Bird('Slavuj', 'brown');
// var vrabac = new Vrabac('yellow', '30 gr');

// console.log(constructorSlavuj);
// console.log(vrabac);
// vrabac.sing();
// vrabac.eat();

// class Bird {
//     constructor(name, color){
//         this.name=name;
//         this.color = color;
//     }

//     sing(){
//         return 'bla bla';
//     }
//     eat = function (){
//         return 'Njam njam';
//     };
// }

// const classifiedBird = new Bird('Slavuj', 'white');

// class Vrabac extends Bird {
//     constructor(color, weight){
//         super('Vrabac', color);
//         this.weight = weight;
//     }
//     sing(){
//         return 'cvr cvr'
//     }
// }

// console.log(classifiedBird) = new Vrabac('yellow', '30 gr');

// console.log(classifiedBird);
// console.log(classifiedBird.eat);
// console.log(classifiedBird.sing);

// console.log(classifiedBirdVrabac);
// console.log(classifiedBirdVrabac.eat());
// console.log(classifiedBirdVrabac.sing());


// const obj = {
//     x: 5,
//     y: 4,
//     z: 7
// };

// console.log(obj);

// let { x: a, y, z } = obj;
// const c = a + 3;
// a = 15;
// y = 12;
// let { x: newA } = obj;

// console.log(a, y, z);
// console.log(obj);


// function destructor({name, surname}) {
//     console.log(name, surname);
// }
// const person = {
//     name: 'Ivan',
//     surname: 'Balic'
// };

// destructor(person);



// const numArray = [1, 2, 3,];
// const [two, one, three] = numArray;
// console.log(one, two, three)

const destructor = ({name, surname}) => (title) => {
    return `${title} ${name} ${surname}`;
};


const person = {
     name: 'Ivan',
    surname: 'Balic'
};

console.log(destructor(person)('Dr'));


const numArr = [1, 2, 3, 4];
