import Carousel from '../components/Carousel';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';

const MainPage = () => {
    return (<div id='rm-mainpage-wrapper'>
        <Carousel />

        <div>
            <section id='about'><About /></section>
            <section id='projects'><Projects /></section>
            <section id='services'><Services/></section>
            <section id='contact'><Contact /></section>
        </div>
    </div>)
};

export default MainPage;
