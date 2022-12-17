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
  

const AppNavbar = (props) =>{
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return(
        <div>
            <Navbar color='dark' dark expand='sm' className='mb-5'> 
                <NavbarBrand href='/' className="me-auto">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/'>Home</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default AppNavbar