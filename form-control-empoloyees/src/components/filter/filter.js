import '../filter/filter.css'

const Filter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'Bonus'},
        {name: 'more then 1000$', label: 'Salary more then 1000$'}
    ]

    const buttons  = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button type="button" 
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            {buttons}
        </div>
    )
}

export default Filter;