import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { nanoid } from 'nanoid';
import './app.css';


function id() {
	return nanoid();
}


function App() {

  const data = [
    {id: id(), name: 'John Smith', rate: 800, increase: false},
    {id: id(), name: 'Peppa Pig', rate: 900, increase: false},
    {id: id(), name: 'Danny Dog', rate: 1100, increase: false},
    {id: id(), name: 'Suzy Sheep', rate: 5000, increase: false},
  ]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
