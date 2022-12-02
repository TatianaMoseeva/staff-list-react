import "./app-filter.css";

const AppFilter = ({applyFilter}) => {

    return (
        <div className="btn-group">
                <button type="button"
                        className="btn btn-light"
                        onClick={() => applyFilter('')}
                >
                        All employees
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        onClick={() => applyFilter('like')}
                >
                        To be promoted
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        onClick={() => applyFilter('moreThen1000')}
                >
                        Rate higher than $1000
                </button>
        </div>
    )
}

export default AppFilter;