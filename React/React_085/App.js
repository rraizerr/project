// 1. import React from 'react';
import { Component } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: "300px"
//   };
//   return <input
//           placeholder={holder}
//           type="text"
//           style={styledField} />;
// }

// 1. class Field extends React.Component {

// }

class Field extends Component {
  render() {
    const holder = "Enter here";
    const styledField = {
    width: "300px"
    };
    
    return <input
            placeholder={holder}
            type="text"
            style={styledField} />;
  }
}

function Btn() {
  const text = "Log in";
  const logged = true;
  return <button>{logged ? "Enter" : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn/>
    </div>
  );
}

export default App;
