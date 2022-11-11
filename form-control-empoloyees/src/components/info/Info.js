import '../info/info.css';

const Info = ({empl, rise}) => {
    return (
        <div className="app-info">
            <h2>Accounting employees for company</h2>
            <h2>Total number of employees: {empl}</h2>
            <h2>Bonus: {rise}</h2>
        </div>
        
    )
    
}

export default Info;