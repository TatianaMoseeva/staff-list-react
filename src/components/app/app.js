import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import {useState} from 'react';
import { nanoid } from 'nanoid';

import './app.css';

function id() {
	return nanoid();
}

const data = [
    {id: id(), name: 'John Smith', rate: 800, increase: false, like: false},
    {id: id(), name: 'Peppa Pig', rate: 900, increase: false, like: false},
    {id: id(), name: 'Danny Dog', rate: 1100, increase: false, like: false},
    {id: id(), name: 'Suzy Sheep', rate: 5000, increase: false, like: false}
  ]


function App() {

  const [employees, setEmployees] = useState(data);

  const total = employees.length;
  const increased = employees.filter(elem => elem.increase).length;

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


  return (
    <div className="app">
        <AppInfo total={total} increased={increased}/>

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList employees={employees} toggleMode={toggleMode} toggleLike={toggleLike} removeEmployee={removeEmployee}/>
        <EmployeesAddForm addEmployee={addEmployee}/>
    </div>
  );
}

export default App;
