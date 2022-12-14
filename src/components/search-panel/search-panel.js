import './search-panel.css';

const SearchPanel = ({query, handleSearch}) => {
    return (
        <input type="search"
                className="form-control search-input"
                placeholder="Find an employee"
                value={query}
                onChange={handleSearch}
        />
    )
}

export default SearchPanel;