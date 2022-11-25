import EmployeesListItem from "../employees-list-item/employees-list-item";
import {useState} from 'react';

import './employees-list.css';

const EmployeesList = ({data}) => {
    
    const [employees, setEmployees] = useState(data);

    function toggleMode(id) {
		setEmployees(employees.map(item => {
			if (item.id === id) {
				item.increase = !item.increase;
			}
			return item;
		}));
	}

    function toggleLike(id) {
		setEmployees(employees.map(item => {
			if (item.id === id) {
				item.like = !item.like;
			}
			return item;
		}));
	}

    const elems =  employees.map(item => {

            return <EmployeesListItem
                key={item.id}
                id={item.id}
                name={item.name}
                rate={item.rate}
                increase={item.increase}
                toggleMode={toggleMode}
                like={item.like}
                toggleLike={toggleLike}
            />
            
    })
    
 
    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default EmployeesList;