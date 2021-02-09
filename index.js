class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYera() {
       return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const tom = new Person('Tom', 'Harry','07-07-1980');
const jilly = new Person('Jilly', 'Ryan','07-07-1967');
const unknown = new Person();

console.log(tom);
console.log(tom.getBirthYera());
console.log(tom.getFullName());
console.log(jilly);
console.log(jilly.getBirthYera());
console.log(jilly.getFullName());
console.log(unknown);
console.log(unknown.getBirthYera());
console.log(unknown.getFullName());