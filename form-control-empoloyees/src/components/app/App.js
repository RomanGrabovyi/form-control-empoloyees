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
    {id: 1, name: 'John C', salary: 100},
    {id: 2, name: 'Alex H', salary: 800},
    {id: 3, name: 'Peter D', salary: 2000}
  ]);

  const onAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee])
  }

  const removeEmployee = (id) => {
    setEmployees(employees.filter(item => item.id !== id))
  }
 

  return (
    <div className="App">
      <Info/>
      <div className="search-panel">
        <SearchPanel/>
        <Filter/>
      </div>
      <List removeEmployee={removeEmployee} employees={employees}/>
      <Form addEmployee={onAddEmployee}/>
    </div>
  );
}

export default App;
