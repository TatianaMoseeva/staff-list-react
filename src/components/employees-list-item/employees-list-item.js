
import './employees-list-item.css';

const EmployeesListItem = ({id, name, rate, increase, toggleMode, like, removeEmployee}) => {

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames+= ' increase';
    }
    if (like) {
        classNames+= ' like';
    }

    return (
        <li className={classNames}>
            <span 
                className="list-group-item-label"
                onClick={() => toggleMode(id, 'like')}>
                    {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={'$' + rate}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={() => toggleMode(id, 'increase')}
                >
                    <i className="fas fa-cookie"></i>
                </button>
 
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={() => removeEmployee(id)}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;