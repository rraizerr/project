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
                { name: "John C.", salary: 800, increase: false, rise:true, id: 1},
                { name: "Alex M.", salary: 3000, increase: true, rise:false, id: 2},
                { name: "Carl W.", salary: 5000, increase: false, rise:false, id: 3}
            ],
            term: "",
            filter: "all"
        }
        this.maxId = 4;
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

    addItem = (name, salary) => {
        const newItem = {
        name,
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({ data }) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = { ...old, increase: !old.increase };
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // }) 

    //     this.setState(({ data }) => ({
    //         // Объект state мы напрямую менять не можем, поэтому мы возвращаем
    //         // новый объект, у которого будет свойство data, в котором будет 
    //         // формироваться новый массив (map возвращает новый массив через callback
    //         // функцию,которая находится внутри него)
    //         data: data.map(item => {
    //             // если при переборе id совпали, значит мы нашли нужный нам объект,
    //             // в таком случае, на ээтой итерации мы возвращаем новый объект 
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             // Если условие не совпало, то мы просто возвращаем этот объект item
    //             return item;
    //         })
    //     }));
    // }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }

    // метод принимает два аргумента, строчку по которой будем искать
    // и массив в котором будет осуществляться поиск
    searchEmp = (items, term) => {
        if (term.length === 0) {    // Если строчка которая отображает поиск ничегоне будет содержать, 
            return items;           // возвращаем массив, который к нам придет
        }
        // если условие не сработало, фильтруем массив
        return items.filter(item => {           // item - каждый отдельный элемент массива
            // возвращаем только те элементы, которые проходят проверку
            return item.name.indexOf(term) > -1 // indexOf() используем для поиска строки
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term }); // сокращенная запись от term: term
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "rise":
                // возвращаем только те элементы в которых rise  == true
                return items.filter(item => item.rise);
            case "moreThen1000":
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    onChangeSalary = (e, id) => {
        this.setState(({ data }) => {
            const updatedData = data.map(item => {
                if (item.id === id) {
                    item.salary = e.target.value;
                }
                return item
            })
            return {
                data: updatedData
            }
        })
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        // this.filterPost как массив принимает выражение (this.searchEmp(data, term), filter);
        // данные будут проходить двойную фильтрацию, сначала проходит фильтрация по поиску, а после - по фильтрам
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        
        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased} />
                
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
            );
    }
}

export default App;