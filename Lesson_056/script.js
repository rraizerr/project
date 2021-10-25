"use strict";

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({ name: "Alex" }),
    headers: {
        "Content-type": "application/json"
    }
})
    .then(response => response.json()) // Метод json() парсит ответ в формат объекта JS
    .then(json => console.log(json)); // полученный объект выводим в консоль
