// Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!


var coffee = {
    name: 'Domaca',
    strength:{
        extraLight: true,
        light: false,
        medium: false,
        strong: false,
        veryStrong: false
    },
    flavour: 'vanila',
    milk: false,
    sugar: 1
    getCoffeeStrength: function(){
        var strength = '';
        switch(coffee.strength){
            case 1:
                strength = 'extra Light'
                break;
             case 2:
                    strength = 'Light'
        }
        return strength;
    }
};

console.log('I like to drink' + coffee.name + 'coffee');