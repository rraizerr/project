import React, { Component } from 'react';
import styled from "styled-components";
import BootstrapTest from './BootstrapTest';

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

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
    a {
      display: block;
      margin: 10px 0 10px 0;
      color: ${props => props.active ? "orange" : "black"};
    }
    input {
      display: block;
      margin-top: 10px;
    }
`;

const Header = styled.h2`
  font-size: 20px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;

//--------------------Используем класс
class WhoAmI extends Component {
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
        return (
            // <> - Реакт фрагмент, избавляемся от лишнего div
            <EmpItem active>
                <Button onClick={this.nextYear}>{text}</Button>
                <Header>My name is {name},
                    surname - {surname},
                    age - {years},
                    position - {position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    {/* Используем стрелочную функцию для передачи аргументов */}
                    <input type="text" onChange={(e) => this.commitInputChanges(e, "some color")} />
                </form>
            </EmpItem>
        );
    }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
    return (
        <div className={"mb-3 p-3 border border-" + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, { className: "shadow p-3 m-3 border rounded" })
                })
            }
        </div>
    )
}

const HelloGreating = () => {
    return (
        <div style={{ "width": "600px", "margin": "0 auto" }}>
            <DynamicGreating color={"primary"}>
                <h2>Hello World</h2>
            </DynamicGreating>
        </div>
    )
}

function App() {
    return (
        <Wrapper>
            <HelloGreating />
            <BootstrapTest
                left={
                    <DynamicGreating color={"primary"}>
                        <h2>This weel was hard</h2>
                        <h2>Hello World</h2>
                    </DynamicGreating>
                }
                right={
                    <DynamicGreating color={"primary"}>
                        <h2>RIGHT!</h2>
                    </DynamicGreating>
                }
            />

            <WhoAmI name="John" surname="Smith" link="facebook.com" />
            <WhoAmI name="Alex" surname="Shepard" link="vk.com" />
        </Wrapper>
    );
}

export default App;
