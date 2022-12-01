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

const initData = [
    {id: id(), name: 'John Smith', rate: 800, increase: false, like: false},
    {id: id(), name: 'Peppa Pig', rate: 900, increase: false, like: false},
    {id: id(), name: 'Danny Dog', rate: 1100, increase: false, like: false},
    {id: id(), name: 'Suzy Sheep', rate: 5000, increase: false, like: false}
  ]


function App() {

  const [employees, setEmployees] = useState({data: initData, query: 'P'});
 
  const {data, query} = employees;
  const total = data.length;
  const increased = data.filter(elem => elem.increase).length;
  const visibleData = searchEmp (data, query);

  function searchEmp (items, term) {
    if (TrackEvent.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  function toggleMode(id, prop) {
    setEmployees(data.map(item => {
      if (item.id === id) {
        return {...item, [prop]: !item[prop]};
      }
      return item;
    }));
  }


  function removeEmployee(id) {
    const index = data.findIndex(elem => elem.id === id);
    setEmployees([...data.slice(0, index), ...employees.slice(index + 1)])
  }

  function addEmployee(name, rate) {
    let newEmployee = {
        id: id(),  
        name: name,
        rate: rate
    };

    if (newEmployee.name.length > 0 && newEmployee.rate) {
      setEmployees([...data, newEmployee]);
    }
  }



  return (
    <div className="app">
        <AppInfo total={total} increased={increased}/>

        <div className="search-panel">
            <SearchPanel />
            <AppFilter/>
        </div>
        
        <EmployeesList employees={visibleData} toggleMode={toggleMode}  removeEmployee={removeEmployee}/>
        <EmployeesAddForm addEmployee={addEmployee}/>
    </div>
  );
}

export default App;


