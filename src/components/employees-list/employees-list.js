import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees, toggleMode, removeEmployee}) => {
    
    const elems =  employees.map(item => {
            return <EmployeesListItem
                key={item.id}
                id={item.id}
                name={item.name}
                rate={item.rate}
                increase={item.increase}
                toggleMode={toggleMode}
                like={item.like}
                removeEmployee={removeEmployee}
            />
            
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default EmployeesList;