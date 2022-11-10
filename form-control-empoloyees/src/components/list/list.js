import ListItem from "../list-item/list-item"
import '../list/list.css'

const List = ({employees, removeEmployee}) => {

    const elements = employees.map(item => {
        const {id, ...itemProps} = item;
        return(
            <ListItem removeEmployee={() => removeEmployee(id)} key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="list list-group">
            {elements}
        </ul>        
    )
}

export default List;