import { Component } from 'react';

import './App.css';

// ----------------- 1. Передаем значения
// function WhoAmI(props) {
//   return (
//     <div>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </div>
//   );
// }

// ----------------- 2. Передаем значения
// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <WhoAmI name="John" surname="Smith" link="facebook.com" />
//       <WhoAmI name="Alex" surname="Shepard" link="vk.com"/>
//     </div>
//   );
// }

// -----------------Передаем как объект
// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name.firstName}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <WhoAmI name={{firstName: "John"}} surname="Smith" link="facebook.com" />
//       <WhoAmI name={{firstName: "Alex"}} surname="Shepard" link="vk.com"/>
//     </div>
//   );
// }

// -----------------Передаем как функцию
// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name()}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <WhoAmI name={() => {return "John"}} surname="Smith" link="facebook.com" />
//       <WhoAmI name={() => {return "Alex"}} surname="Shepard" link="vk.com"/>
//     </div>
//   );
// }

//--------------------Используем класс
class WhoAmI extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++"
    }
  }

  nextYear = () => {
    this.setState(state => ({ // этот метод используется для изменения состояния
      years: state.years + 1  // callback используется для точности и последовательности данных
    }))
  }

  render() {
    const { name, surname, link } = this.props;
    return(
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>  
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Shepard" link="vk.com"/>
    </div>
  );
}

export default App;
