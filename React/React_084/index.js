import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 1.
// const elem = <h2>Hello World!</h2>;

// 2.
// const elem = React.createElement("h2", null, "Hello World!");
// второй аргумент - это название класса. У нас его нет по этому null

// 3.
// const elem = React.createElement("h2", {className: "greetings"}, "Hello World!");

// 4.
// const elem = (
//   <div>
//     <h2>Hello World!</h2>
//     <input type="text" />
//     <button>Click</button>
//   </div>
// );

// 5.
const text = "Hello World!";

const elem = (
  <div>
    <h2 className="text">Текст: {text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex="0">Click</button>
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);
