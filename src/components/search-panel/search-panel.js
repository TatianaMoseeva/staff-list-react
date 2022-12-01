import {useState} from 'react';
import './search-panel.css';

const SearchPanel = () => {

    const [query, setQuery] = useState('');


    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Find an employee"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export default SearchPanel;