import { AboutUsSection, rm_logo } from '../assets/index';

const About = () => {
    return (<div id='rm-about-wrapper'>
        <img id='rm-about-img' src={rm_logo} />
        <div id='rm-about-content'>
            <h2 id='rm-about-header'>{AboutUsSection.Title}</h2>
            <p id='rm-about-desc'>{AboutUsSection.Description}</p>
        </div>

    </div>);
};

export default About;
