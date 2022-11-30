import EmployeesListItem from "../employees-list-item/employees-list-item";
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {useState} from 'react';
import { nanoid } from 'nanoid';

import './employees-list.css';

function id() {
	return nanoid();
}

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
    
    function addEmployee(name, rate) {
        let newEmployee = {
            id: id(),  
            name: name,
            rate: rate
        };
        setEmployees([...employees, newEmployee]);
        console.log(newEmployee);
    }




    return ( <>
                <ul className="app-list list-group">
                    {elems}
                </ul>
            <EmployeesAddForm addEmployee={addEmployee}/>
        </>

    )
}

export default EmployeesList;