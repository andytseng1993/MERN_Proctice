import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { register } from '../../redux/actions/authActions'
import { clearErrors } from '../../redux/actions/errorActions'

const RegisterModal =()=>{
    const [state,setState] = useState({
        modal: false,
        name: '',
        email:'',
        password:'',
        msg:null
    })
    const dispatch = useDispatch()
    const error = useSelector(state=>state.error)
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    console.log(isAuthenticated);
    useEffect(()=>{
        if(error.id==='REGISTER_FAIL'){
           return setState(prev=>({...prev,msg:error.msg.msg}))
        }
        setState(prev=>({...prev,msg:null}))
    },[error])
    useEffect(()=>{
        if(!state.modal) return
        if(!isAuthenticated) return       
        toggle()
    },[isAuthenticated])
    const toggle = ()=>{
        //Clear error
        dispatch(clearErrors())
        setState(pre=>({...pre, modal:!pre.modal}))
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        const {name,email,password} = state
        //Create user object
        const newUser = {name,email,password }
        dispatch(register(newUser))
    }
    const onChange = (e)=>{
        setState(pre=>({...pre,[e.target.name]:e.target.value}))
    }

    return(
        <div>
            <NavLink onClick={toggle} href='#'>
                Register
            </NavLink>
            <Modal
                isOpen={state.modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>Register</ModalHeader>
                <ModalBody>
                    {state.msg? <Alert color='danger'>{state.msg}</Alert>:null}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Name'
                                className='mb-3'
                                onChange={onChange}
                            />
                            <Label for='email'>Email</Label>
                            <Input
                                type='email'
                                name='email'
                                id='email'
                                className='mb-3'
                                placeholder='Email'
                                onChange={onChange}
                            />
                            <Label for='password'>Password</Label>
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                className='mb-3'
                                placeholder='Password'
                                onChange={onChange}
                            />
                            <Button
                                color='dark'
                                style={{marginTop:'2rem'}} 
                                block
                            >Register</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
export default RegisterModal