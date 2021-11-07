'use strict';

const checkbox = document.querySelector("#checkbox"),
    form = document.querySelector("form"),
    change = document.querySelector("#color");

if (localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "red";
}

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
    localStorage.setItem("isChecked", true);
});

change.addEventListener("click", () => {
    if (localStorage.getItem("bg") === "changed") {
        localStorage.removeItem("bg");
        form.style.backgroundColor = "#fff";
    } else {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "red";
    }
});

const persone = {
    name: "Alex",
    age: 25,
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem("alex", serializedPersone);
console.log(localStorage.getItem("alex")); // строка
console.log(JSON.parse(localStorage.getItem("alex"))); // объект