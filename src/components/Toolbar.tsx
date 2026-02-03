import { NavLink } from 'react-router-dom'
import logo from '../assets/rm_logo.jpg';

const ToolBar = () => {
    return (
        <div>
            <div id='rm-toolbar-wrapper'>
                <div id='rm-toolbar-logo'>
                    <img src={logo} alt="RM Logo" />
                </div>
                <nav id='rm-toolbar-nav'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
        </div>
    )
};
export default ToolBar;
