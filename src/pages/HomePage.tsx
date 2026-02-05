import Carousel from '../components/Carousel';
import About from './About';
import Contact from './Contact';

const HomePage = () => {
    return (<div id='rm-home-wrapper'>
        <Carousel />

        <div>
            <section id='about'><About/></section>
            <section id='contact'><Contact /></section>
        </div>
    </div>)
};

export default HomePage;
