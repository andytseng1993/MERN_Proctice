import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import RegisterModal from './auth/RegisterModal';
import {useSelector} from 'react-redux'

const AppNavbar = (props) =>{
    const [isOpen,setIsOpen] = useState(false)
    const {isAuthenticated,user} = useSelector(state=>state.auth)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    const authLinks = (
        <>
            <NavItem>
                <div className='navbar-text me-3'>
                    <strong>{user?`Welcome ${user.name}`:null}</strong>
                </div>
            </NavItem>
            <NavItem>
                <Logout/>
            </NavItem>
        </>
    )
    const guestLinks =(
        <>
            <NavItem>
                <RegisterModal/>
            </NavItem>
            <NavItem>
                <LoginModal/>
            </NavItem>
        </>
    )
    return(
        <div>
            <Navbar color='dark' dark expand='sm' className='mb-5'> 
                <NavbarBrand href='/' className="me-auto">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className='ms-auto' navbar>
                        {isAuthenticated?authLinks:guestLinks}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default AppNavbar