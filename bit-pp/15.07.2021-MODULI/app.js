class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Admin extends User {
    constructor(name, age, isAdmin){
        super(name, age);
        this.isAdmin = isAdmin
    }
}
const allUsers = [];
const allAdmins = [];

const newUser = new User('John', 33);
const newAddmin = new Admin('Jack', 15)

const addUserToStorage = user =>allUsers.push(user);
const addAdminToStorage = user => {
    if (!user.isAddmin){
        console.log('User is not admin adding to storage skipped');
        return;
    }

    allUsers.push(user);
};

console.log(newUser);

addUserToStorage(newUser);
addUserToStorage(newAddmin)
addUserToStorage(newAdmin)
addUserToStorage(newUser);

console.log('Storage: ', allUser)
console.log('Storage: ', allUsers);

