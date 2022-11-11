import ListItem from "../list-item/list-item"
import '../list/list.css'

const List = ({employees, removeEmployee, onToggleIncrease, onToggleRise}) => {

    const elements = employees.map(item => {
        const {id, ...itemProps} = item;
        
        return(
            <ListItem 
            removeEmployee={() => removeEmployee(id)} 
            key={id} {...itemProps}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/>
        )
    })

    return (
        <ul className="list list-group">
            {elements}
        </ul>        
    )
}

export default List;