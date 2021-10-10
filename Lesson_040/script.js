"use strict";

// const now = new Date("2021-10-10");
// const now = new Date(2021, 10, 10, 14);
// const now = new Date(0);
// const now = new Date(-999999999999);

const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// const now = new Date(1633864770803);
// console.log(now);


// console.log(now.setHours(18));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    const some = i ** 3;
}

let end = new Date();

console.log(`цикл отработал за ${end - start} милисекунд`);  