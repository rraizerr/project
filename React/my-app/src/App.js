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
      text: "+++",
      position: ""
    }

    // С помощью bind() привязываем к нашему методу контекст вызова
    // this.nextYear = this.nextYear.bind(this);
  }

  //   nextYear() {
  //   this.setState(state => ({
  //     years: state.years + 1
  //   }))
  // }

  nextYear = () => {
    this.setState(state => ({ // этот метод используется для изменения состояния
      years: state.years + 1  // callback используется для точности и последовательности данных
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const { name, surname, link } = this.props;
    const { position, years, text } = this.state;
    return(
      <div>
        <button onClick={this.nextYear}>{text}</button>  
        <h1>My name is {name},
            surname - {surname},
            age - {years},
            position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          {/* Используем стрелочную функцию для передачи аргументов */}
          <input type="text" onChange={(e) => this.commitInputChanges(e, "some color")} />
        </form>
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
