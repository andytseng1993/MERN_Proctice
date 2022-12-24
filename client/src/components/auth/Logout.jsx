import { NavLink } from 'reactstrap';
import {useDispatch} from 'react-redux'
import { logout } from '../../redux/actions/authActions';

const Logout = ()=>{
    const dispatch = useDispatch()
    return(
        <>
            <NavLink onClick={()=>dispatch(logout())} href='#'>Logout</NavLink>
        </>
    )
}
export default Logout