import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import { useDispatch,useSelector } from "react-redux"
import { addItem,deleteItem, getItems } from '../redux/actions'
import { useEffect } from 'react'


const ShoppingList = ()=>{
    const dispatch = useDispatch()
    const {items} = useSelector(state=>state.items)
    console.log(items);
    useEffect(()=>{ 
        dispatch(getItems())
    },[])

    const addItemBtn =()=>{
        const name = prompt('Enter Item')
        if(name){
            dispatch(addItem({name}))
        }
    }
    const deleteItemBtn =(id)=>{
        dispatch(deleteItem(id))
    }
    return (
        <Container>
            <ListGroup>
                <TransitionGroup className='shopping-list'>
                    {items.map(({_id,name})=>(
                        <CSSTransition key={_id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                                <Button className='remove-btn'  
                                    color='danger' size='sm' onClick={()=>deleteItemBtn(_id)}>   
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