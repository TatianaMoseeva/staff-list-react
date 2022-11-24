import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    All employees
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    To be promoted
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    Rate higher than $1000
            </button>
        </div>
    )
}

export default AppFilter;