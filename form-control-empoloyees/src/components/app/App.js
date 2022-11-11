import React, { useState } from 'react';

import Info from '../info/Info';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import List from '../list/list';
import Form from '../form/form';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



function App () {
  const [employees, setEmployees] = useState ([
    {id: 1, name: 'John C', salary: 100, increase: false, rise: false},
    {id: 2, name: 'Alex H', salary: 800, increase: false, rise: false},
    {id: 3, name: 'Peter D', salary: 2000, increase: false, rise: false}
  ]);

  const onAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee])
  }

  const removeEmployee = (id) => {
    setEmployees(employees.filter(item => item.id !== id))
  }

  const onToggleIncrease = (id) => {
    setEmployees( employees.map((item) => {
    if(item.id === id) {
      return {...item, increase: !item.increase}
    }   
    return item   
  }))
  }

  const onToggleRise = (id) => {
    setEmployees(employees.map(item => {
      if(item.id === id) {
        return{...item, rise: !item.rise}
      }
      return item
    }))
  }

  const empl = employees.length;
  const rise = employees.filter(item => item.rise).length;
 

  return (
    <div className="App">
      <Info 
          empl={empl} 
          rise={rise}/>
      <div className="search-panel">
        <SearchPanel/>
        <Filter/>
      </div>
      <List 
          removeEmployee={removeEmployee} 
          employees={employees}
          onToggleIncrease={onToggleIncrease}
          onToggleRise={onToggleRise}/>
      <Form addEmployee={onAddEmployee}/>
    </div>
  );
}

export default App;
