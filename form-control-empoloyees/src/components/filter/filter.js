import '../filter/filter.css'

const Filter = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-light">All employees</button>
            <button type="button" className="btn btn-outline-light">Bonus</button>
            <button type="button" className="btn btn-outline-light">Salary more then 1000$</button>
        </div>
    )
}

export default Filter;