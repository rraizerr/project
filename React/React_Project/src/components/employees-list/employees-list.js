import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css"

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    
    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                // Приходит объект собития e, через него обращаемся к currentTarget,
                // и получаем у этого DOM-элемента значение егог атрибута getAttribute("data-toggle")
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))} />
            // name={item.name} salary={item.salary} идентична этой записи {...item}
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;