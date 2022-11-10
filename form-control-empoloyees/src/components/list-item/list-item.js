import { useState } from 'react';

import '../list-item/list-item.css'

const ListItem = ({name, salary, removeEmployee}) => {

    const [increase, setIncrease] = useState(false);
    const [rise, setRise] = useState(false)

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }

    if(rise) {
        classNames += ' like'
    }

    const onIncrease = () => {
        setIncrease(!increase)
    }

    const onRise = () => {
        setRise(!rise)
        console.log(rise)
    }
    
    return (

        <li className={classNames}>
            <span 
                onClick={onRise} 
                className="list-group-item-label"
                >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        onClick={onIncrease}
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