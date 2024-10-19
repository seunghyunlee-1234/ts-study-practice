// OOP: Object Oriented Programming

// class: frame
class User {
    // instance data
    email = ""
    password = ""
    nickname = ""
    age = 0

    // special method - constructor
    constructor(email, password, nickname, age) {
        this.email = email
        this.password = password
        this.nickname = nickname
        this.age = age
    }
    // instance method
    get_profile = () => {

    }
}

// object: user1, user2 ...

// user1 instance
const user1 = new User("asdasdasdasd@gmail.com", "1234", "haha", 12)
console.log(user1.email)

// user2 instance
const user2 = new User("aaa@gmail.com", "1234", "hoho", 12)
console.log(user2.email)
