"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100
};

// старый метод через свойство __proto__
// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);
// console.log(john.sayHello);

// john.sayHello();

//Актуальные методы
Object.setPrototypeOf(john, soldier);

john.sayHello();

// Создаем новый объект johnTwo, который будет 
//прототипно наследоветься от soldier
const johnTwo = Object.create(soldier);

johnTwo.sayHello();