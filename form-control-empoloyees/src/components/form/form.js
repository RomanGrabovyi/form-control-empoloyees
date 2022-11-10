import React, { useState } from 'react';
import nextId from 'react-id-generator';
import '../form/form.css'

const Form = ({addEmployee}) => {
    const [emoployee, setEployee] = useState({name: '',salary: ''});

    const itemId = nextId();
    const addNewItem = (e) => {
        e.preventDefault();
        const newEmployee = {
            ...emoployee, id: itemId
        }
        
        console.log(itemId)
        addEmployee(newEmployee);
        setEployee({name: '', salary: ''})
      }

    return (
        <div className='app-add-form'>
            <h3>Add new employee</h3>
            <form className='add-form d-flex'>
                <input
                    value={emoployee.name}
                    onChange={e => setEployee({...emoployee, name: e.target.value})} 
                    className="form-control new-post-label" 
                    type="text"
                    placeholder='What is the name?'/>
                <input
                    value={emoployee.salary}
                    onChange={e => setEployee({...emoployee, salary: e.target.value})} 
                    className="form-control new-post-label" 
                    type="number"
                    placeholder='Salary'/>
                <button
                    onClick={addNewItem} 
                    type="submit" 
                    className='btn btn-outline-light'>
                    Add
                </button>
            </form>
                
        </div>
    );
};

export default Form