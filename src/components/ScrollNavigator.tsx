import { RMLogo } from './icons';
import { scrollTo } from './common';
import HamburgerIcon from './icons/HamburgerIcon';

const ScrollNavigator = () => {

    return (
        <div>
            <div id='rm-scrollnav-wrapper'>
                <div id='rm-scrollnav-logo'>
                <RMLogo/>
                </div>
                <nav id='rm-scrollnav-items'>
                    <a onClick={() => scrollTo('about')}>About</a>
                    <a onClick={() => scrollTo('projects')}>Projects</a>
                    <a onClick={() => scrollTo('services')}>Services</a>
                    <a onClick={() => scrollTo('contact')}>Contact</a>
                </nav>
                <div id={'rm-scrollnav-burger-menu'}><HamburgerIcon height={45} width={45}/></div>
            </div>
        </div>
    );
};

export default ScrollNavigator;
