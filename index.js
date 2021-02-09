const person = {
    name: "Tom",
    age: 10,
    isBocked: false,
    hobbies: ["Dance", "Singinging"],
    address: {
        city: "LA",
        code: "12345"
    }
};

//console.log(person);

const {name, age, address: {code}} = person;
console.log(`Name is ${name} and age is ${age} ${code}`);