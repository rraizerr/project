"use strict";

// Масивы и псевдомассивы

const arr = [1, 2, 3, 6, 8];

// удаляет последний элемент из нашего массива
// arr.pop();
// console.log(arr);

// добавляет элемент в конец массива
// arr.push(10);
// console.log(arr);

// метод перебора массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// метод for of
for (let value of arr) {
    console.log(value);
}

console.log(arr.length); //свойство состоит из последнего индекса, 
//который есть в массиве + 1, потому 5, а не 4, если считать с 0 элемента

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

//Метод forEach
//  элемент массива, номер по порядку, сам массив
//                  \      |     /
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутки массива ${arr}`);
})

console.log("");

//Метод split превретим строку в массив
// const str = prompt("", "");
// const products = str.split(", ")
// console.log(products);

//Метод сортировки sort
// products.sort();

const arrTwo = [2, 13, 26, 8, 10];
arrTwo.sort(compareNum);
console.log(arrTwo);

// функция для сортировки
function compareNum(a, b) {
    return a - b;
}

// Метод join превращаем массив в строку
// console.log(products.join("; "));
