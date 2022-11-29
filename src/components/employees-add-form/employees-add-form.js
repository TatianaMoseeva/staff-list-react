import {useState} from 'react';
import './employees-add-form.css';

const EmployeesAddForm = () => {

    const [name, setName] = useState('');
    const [rate, setRate] = useState('');

    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Name and Surname" 
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Rate" 
                    value={rate}
                    onChange={event => setRate(event.target.value)}
                />

                <button type="submit"
                    className="btn btn-outline-light">Add employee
                </button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;