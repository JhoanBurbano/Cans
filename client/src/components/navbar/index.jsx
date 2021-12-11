import { NavLink } from 'react-router-dom';
import {_Navbar} from '../../stl-cmp'

const Navbar = ()=>{
    return (
        <_Navbar>
            <div className="logo">
            <NavLink  to="/app" className="logo">can</NavLink>
            </div>
            <div className="links">
            <NavLink to={'/app/create'}>{'Create a Can'}</NavLink>
            <NavLink to={'/app/about'}>{'About'}</NavLink>
            </div>
        </_Navbar>
    )
}

export default Navbar;