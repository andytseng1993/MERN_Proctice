import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

const defaultItems=[
    {id:uuidv4(),name:'Eggs'},
    {id:uuidv4(),name:'Milk'},
    {id:uuidv4(),name:'Steak'},
    {id:uuidv4(),name:'Water'}
]
const ShoppingList = ()=>{
    const [items,setItems] = useState(defaultItems)

    const addItem =()=>{
        const name = prompt('Enter Item')
        if(name){
            setItems(pre=>(
                [...pre,{id:uuidv4(),name}]
            ))
        }
    }
    const deleteItem =(id)=>{
        setItems(pre=>(pre.filter(item=>item.id!==id)))
    }
    return (
        <Container>
            <Button color='dark' style={{marginBottom:'2rem'}}
                onClick={addItem}>
                Add Item
            </Button>
            <ListGroup>
                <TransitionGroup className='shopping-list'>
                    {items.map(({id,name})=>(
                        <CSSTransition key = {id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                                <Button className='remove-btn'  
                                    color='danger' size='sm' onClick={()=>deleteItem(id)}>   
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