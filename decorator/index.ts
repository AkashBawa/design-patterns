class User  {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class ExtendedUser {

    public name: string;
    public email: string;

    constructor(user: User, email: string) {
        this.name = user.name;
        this.email = email;
    }
}


(function() {

    const normalUser = new User('akash');
    const decoratedUser = new ExtendedUser(normalUser, 'myemail@gmail.com');

    console.log(decoratedUser.name, decoratedUser.email)
})()