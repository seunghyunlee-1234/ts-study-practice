"use strict";
// OOP: Object Oriented Programming
// class: frame
class User {
    // special method - constructor
    constructor(email, password, nickname, age) {
        // instance data
        this.email = "";
        this.password = "";
        this.nickname = "";
        this.age = 0;
        // instance method
        this.get_profile = () => {
        };
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.age = age;
    }
}
// object: user1, user2 ...
// user1 instance
const user1 = new User("asdasdasdasd@gmail.com", "1234", "haha", 12);
console.log(user1.email);
// user2 instance
const user2 = new User("aaa@gmail.com", "1234", "hoho", 12);
console.log(user2.email);
