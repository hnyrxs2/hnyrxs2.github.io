import Carousel from '../components/Carousel';
// import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const HomePage = () => {
    return (<div id='rm-home-wrapper'>
        <Carousel />

        <div>
            <section id='projects'><Projects /></section>
            {/* <section id='about'><About /></section> */}
            {/* <section id='services'></section> */}
            <section id='contact'><Contact /></section>
        </div>
    </div>)
};

export default HomePage;
