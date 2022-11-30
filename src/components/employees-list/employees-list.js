import EmployeesListItem from "../employees-list-item/employees-list-item";
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {useState} from 'react';
import { nanoid } from 'nanoid';

import './employees-list.css';

function id() {
	return nanoid();
}

const data = [
    {id: id(), name: 'John Smith', rate: 800, increase: false, like: false},
    {id: id(), name: 'Peppa Pig', rate: 900, increase: false, like: false},
    {id: id(), name: 'Danny Dog', rate: 1100, increase: false, like: false},
    {id: id(), name: 'Suzy Sheep', rate: 5000, increase: false, like: false}
  ]

const EmployeesList = () => {
    
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
                removeEmployee={removeEmployee}
            />
            
    })

    function removeEmployee(id) {
        const index = employees.findIndex(elem => elem.id === id);
        setEmployees([...employees.slice(0, index), ...employees.slice(index + 1)])
    }
    
    function addEmployee(name, rate) {
        let newEmployee = {
            id: id(),  
            name: name,
            rate: rate
        };
        setEmployees([...employees, newEmployee]);
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