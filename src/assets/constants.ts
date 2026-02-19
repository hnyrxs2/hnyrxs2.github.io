import { c1, c2, c3 } from '../assets/portfolio';


export enum ArchitectDetails {
    Name = 'Reymark S. Macasaet',
    PhoneNumber = '+63 960 8443 272',
    Email = 'rm.architectureanddesign@gmail.com',
    Location = 'Hagonoy, Bulacan, Philippines',
    Facebook = 'https://facebook.com/RM.Architecture.and.Design',
    Instagram = 'https://instagram.com/rey.mcst',
    Linkedin = 'https://www.linkedin.com/in/reymark-macasaet-67a903194/'
};


interface IProjectTiles {
    title: string;
    description: string;
    src: string;
}
export const ProjectTiles: IProjectTiles[] = [
    {
        title: 'Contemporary Home',
        description: `This residential project is a contemporary single-family home designed to balance functionality, comfort, and modern aesthetics. The design emphasizes clean architectural lines, natural light, and seamless indoor–outdoor integration to create a warm and inviting living environment.
The layout features an open-plan living, dining, and kitchen area that promotes connectivity while maintaining defined spatial zones. Large windows and sliding glass doors maximize daylight and ventilation, enhancing energy efficiency and overall spatial experience.
Private areas, including bedrooms and bathrooms, are thoughtfully positioned to ensure privacy and tranquility. The master suite includes a walk-in closet and an en-suite bathroom, designed with both practicality and elegance in mind.
Material selection focuses on a harmonious blend of natural textures and modern finishes, creating a timeless yet contemporary character. Sustainable design considerations such as passive cooling strategies, efficient lighting, and optimized orientation contribute to long-term performance and comfort.
This project reflects a balance between architectural expression and everyday livability, resulting in a home that is both visually striking and highly functional.`,
        src: c1
    },
    {
        title: 'Minimalist Modern Residence',
        description: `This project is a minimalist two-storey residence designed around simplicity, clarity, and spatial efficiency. The architectural concept focuses on clean geometry, balanced proportions, and a restrained material palette that highlights texture over ornamentation.
The ground floor is organized into a fluid open-plan configuration, allowing the living, dining, and kitchen areas to function as a unified social space. Floor-to-ceiling glazing strengthens the visual connection between interior spaces and the landscaped exterior, enhancing natural light and ventilation throughout the home.
Upstairs, private bedrooms are arranged to maximize privacy while maintaining cohesive circulation. Neutral finishes, warm wood accents, and subtle lighting details create a calm and contemporary atmosphere that supports everyday living.
This home reflects a design philosophy rooted in intentional simplicity—where every element serves both aesthetic and functional purpose.`,
        src: c2
    },
    {
        title: 'Tropical Contemporary Home',
        description: `Designed for a warm climate environment, this tropical contemporary home emphasizes passive cooling strategies and strong indoor–outdoor relationships. Wide overhangs, shaded terraces, and strategically placed openings help regulate heat gain while promoting cross-ventilation.
The layout centers around a semi-open living space that extends toward an outdoor patio, blurring the boundary between interior and exterior. Natural materials such as stone, wood, and textured concrete are combined with modern finishes to create a balanced architectural expression.
Bedrooms are positioned to capture natural airflow and garden views, offering comfort and privacy. The overall design prioritizes sustainability, comfort, and resilience while maintaining a refined modern character.
This project demonstrates how climate-responsive design can enhance both performance and spatial experience.`,
        src: c3
    }
];