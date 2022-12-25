import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Container
} from 'reactstrap';

import {useDispatch , useSelector} from 'react-redux'
import { addItem } from '../redux/actions'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const ItemModal =()=>{
    const [state,setState] = useState({
        modal: false,
        name: ''
    })
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    const toggle = ()=>{
        setState(pre=>({...pre, modal:!pre.modal}))
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        const newItem ={
            id:uuidv4(),
            name: state.name
        }
        dispatch(addItem(newItem))
        toggle()
    }
    const onChange = (e)=>{
        setState(pre=>({...pre,[e.target.name]:e.target.value}))
    }

    return(
        <div>
            <Container>
                {isAuthenticated?
                    <Button
                        color='dark'
                        className='mb-4'
                        onClick={toggle}
                    >Add Item</Button> 
                    :
                    <h4 className='mb-4'>Please log in to manage items</h4>
                }
            </Container>
            <Modal
                isOpen={state.modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for='item'>Item</Label>
                            <Input
                                type='text'
                                name='name'
                                id='item'
                                placeholder='Add shiping item'
                                onChange={onChange}
                            />
                            <Button
                                color='dark'
                                style={{marginTop:'2rem'}} 
                                block
                            >Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
export default ItemModal