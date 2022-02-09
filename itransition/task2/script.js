const { SHA3 } = require("sha3");
const fs = require("fs");

const files = fs.readdirSync("files");

let arr = [];

files.forEach(file => {
    const hash = new SHA3(256);
    let j = fs.readFileSync(`files/${file}`);

    hash.update(j);
    arr.push(hash.digest("hex"));
});

arr = arr.sort();

let str = arr.join("") + "vv.cherkov@gmail.com";
console.log(str);

const hash = new SHA3(256);
hash.update(str);
console.log(hash.digest("hex"));