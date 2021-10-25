"use strict";

// filter

// const names = ["Ivan", "Ann", "Ksenia", "Valdemart"];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ["IvAn", "AnnA", "Hello"];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// every/some

// const some = [4, "sdsf", "jukrgue"];

// console.log(some.some(item => typeof (item) === "number"));

// console.log(some.every(item => typeof (item) === "number"));

// reduece

// const arr = [4, 5, 1, 3, 2, 6];
//                     // 0    4
//                     // 4    5
//                     // 9    1
//                     // 10   3
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// метод reduce также принимает второй аргумент

// const arr = [4, 5, 1, 3, 2, 6];
//                     // 3    4
//                     // 7    5
//                     // 12   1
//                     // 13   3
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ["apple", "pear", "plum"];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`)
// console.log(res);

// entries

const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal"
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === "persone")
    .map(item => item[0]);

console.log(newArr);