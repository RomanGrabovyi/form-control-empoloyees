import ListItem from "../list-item/list-item"
import Message from "../message/message"
import '../list/list.css'

const List = ({employees, removeEmployee, onToggleIncrease, onToggleRise, onChangeSalary}) => {

    const elements = employees.map(item => {
        const {id, ...itemProps} = item;

        return(
            <ListItem 
            removeEmployee={() => removeEmployee(id)} 
            key={id} {...itemProps}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}
            onChangeSalary={onChangeSalary}
            {...itemProps}
            />
        )
    })

    const content = elements.length === 0 ? <Message/> : elements
    return (  
        <ul className="list list-group"> 
            {content}
        </ul>        
    )
}

export default List;