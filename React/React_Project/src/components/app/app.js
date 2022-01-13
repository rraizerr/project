import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: false, id: 1},
                { name: "Alex M.", salary: 3000, increase: true, id: 2},
                { name: "Carl W.", salary: 5000, increase: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // находим индекс элемента в массиве с помощью метода findIndex(),
            // который принимает в себя callback функцию
            // elem - каждый наш элемент по порядку, и сравнимаем id каждого 
            // элемента elem.id с тем id который к нам приходит из метода
            // const index = data.findIndex(elem => elem.id === id);
            
            // // Копируем массив с 0 индекса до нужного нам
            // const before = data.slice(0, index);
            // // Копируем массив, со следующего элемента после index и до конца массива
            // const after = data.slice(index + 1);
            // // Создаем новый массив, содержащий все элементы, без нужного нам
            // const newArr = [...before, ...after];
            // return {
            //     data: newArr
            // }

            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo />
                
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm />
            </div>
            );
    }
}

export default App;