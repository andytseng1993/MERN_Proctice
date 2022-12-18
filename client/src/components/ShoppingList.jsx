import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch,useSelector } from "react-redux"
import { addItem,deleteItem } from '../redux/actions'


const ShoppingList = ()=>{
    const dispatch = useDispatch()
    const {items} = useSelector(state=>state.items)

    const addItemBtn =()=>{
        const name = prompt('Enter Item')
        console.log(name)
        if(name){
            dispatch(addItem({id:uuidv4(),name}))
        }
    }
    const deleteItemBtn =(id)=>{
        dispatch(deleteItem(id))
    }
    return (
        <Container>
            <ListGroup>
                <TransitionGroup className='shopping-list'>
                    {items.map(({id,name})=>(
                        <CSSTransition key={id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                                <Button className='remove-btn'  
                                    color='danger' size='sm' onClick={()=>deleteItemBtn(id)}>   
                                    &times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>

    )
}
export default ShoppingList