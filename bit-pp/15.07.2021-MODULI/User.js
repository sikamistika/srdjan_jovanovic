class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

 function createUser(name, age){
    return new User (name, age);
}
export {
    User
}