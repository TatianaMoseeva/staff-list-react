import "./app-info.css";

const AppInfo = ({total, increased}) => {
    return (
        <div className="app-info">
            <h1>Employees list of the N company</h1>
            <h2>Total number of employees: {total}</h2>
            <h2>To be rewarded: {increased}</h2>
        </div>
    )
}

export default AppInfo;