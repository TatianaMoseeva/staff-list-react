import {useState} from 'react';
import './search-panel.css';

const SearchPanel = () => {

    const [search, setSearch] = useState('');

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Find an employee"
                value={search}
                onChange={event => setSearch(event.target.value)}
        />
    )
}

export default SearchPanel;