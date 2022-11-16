
import { useState } from 'react';
import '../list-item/list-item.css'

const ListItem = ({name, increase, rise, removeEmployee, onToggleIncrease, onToggleRise, onChangeSalary}) => {


    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }

    if(rise) {
        classNames += ' like'
    }
    const [salary, setSalary] = useState('200');

    const onSalary = (e) => {
        setSalary(e.target.value);
        onChangeSalary(name, e.target.value)
    }

    return (

        <li className={classNames}>
            <span 
                onClick={onToggleRise} 
                className="list-group-item-label"
                >{name}</span>
            <input 
                type="number" 
                className="list-group-item-input" 
                value={salary}
                onChange={onSalary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        onClick={onToggleIncrease}
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={() => removeEmployee()}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default ListItem;