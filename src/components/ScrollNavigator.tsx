// import { NavLink } from 'react-router-dom';
import logo from '../assets/rm_logo.jpg';


const ScrollNavigator = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <div id='rm-toolbar-wrapper'>
                <div id='rm-toolbar-logo'>
                    <img src={logo} alt="RM Logo" />
                </div>
                <nav id='rm-toolbar-nav'>
                    {/* <NavLink to='/' onClick={() => scrollTo('about')}>About</NavLink>
                    <NavLink to='/' onClick={() => scrollTo('contact')}>Contact</NavLink> */}
                    <button onClick={() => scrollTo('about')}>About</button>
                    <button onClick={() => scrollTo('contact')}>Contact</button>
                </nav>
            </div>
        </div>
    );
};

export default ScrollNavigator;
