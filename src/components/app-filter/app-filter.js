import "./app-filter.css";

const AppFilter = ({filter, applyFilter}) => {

    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'like', label: 'To be promoted'},
        {name: 'moreThen1000', label: 'Rate higher than $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const btnClass = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button key={name}
                    type="button"
                    className={`btn ${btnClass}`}
                    onClick={() => applyFilter(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )

}

export default AppFilter;