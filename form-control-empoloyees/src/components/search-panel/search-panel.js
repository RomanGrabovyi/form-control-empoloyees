import { useState } from 'react'

import '../search-panel/search-panel.css'

const SearchPanel = ({onSearch}) => {
    const [term, setTerm] = useState('')

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        onSearch(term)
    }
    return (
        <div>
            <input type="text" 
                   className="form-control search-input"
                   placeholder="Enter name"
                   value={term}
                   onChange={onUpdateSearch}/>
        </div>
    )
}

export default SearchPanel;