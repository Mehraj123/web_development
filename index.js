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


const todos = [
    {
        id:1,
        text: "Meeting with boss",
        isCompleted: false
    },
    {
        id:2,
        text: "Drink Water",
        isCompleted: false
    },
    {
        id:3,
        text: "Buy Milk",
        isCompleted: false
    },
    {
        id:4,
        text: "Call Tema",
        isCompleted: true
    }
];

todos.forEach(function(todo){
    console.log(todo);
});