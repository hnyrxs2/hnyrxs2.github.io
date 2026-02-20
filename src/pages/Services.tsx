import React from 'react';
import { BuildDesignIcon, PlanningIcon } from '../components/icons';
// import BuildDesignIcon from '../components/icons/BuildDesignIcon';
// import { PlanningIcon } from '../components/icons/index';

interface IServices {
    name: string;
    shortDescription: string;
    description: string;
    icon: React.JSX.Element;
}

const Services = () => {
    const servicesDetails: IServices[] = [
        {
            name: 'Architectural Design & Planning',
            shortDescription: 'We transform ideas into well-designed, functional spaces through thoughtful planning and detailed architectural solutions from concept to construction documentation.',
            description: `We provide comprehensive architectural design services from concept development to detailed construction drawings. Our process begins with understanding the client's vision, site conditions, and functional requirements. We translate these into well-planned, efficient, and visually compelling spaces that balance aesthetics, performance, and practicality.
                        Deliverables may include schematic designs, 3D visualizations, technical drawings, and building permit documentation to ensure a smooth transition from idea to construction.`,
            icon: <BuildDesignIcon theme='dark' height={50} width={50} />
        },
        {
            name: 'Interior Architecture & Space Planning',
            shortDescription: 'We create refined interiors that enhance flow, comfort, and identity through strategic layouts, material selection, and cohesive design details.',
            description: `Our interior architecture service focuses on optimizing spatial flow, material selection, lighting strategy, and built-in elements to enhance both comfort and functionality. We design interiors that complement the architectural concept while reflecting the client's lifestyle or brand identity.
                        From residential homes to commercial spaces, we ensure every detail—from layout to finishes—contributes to a cohesive and refined environment.`,
            icon: <PlanningIcon theme='dark' height={50} width={50} />
        },
        {
            name: 'Project Coordination & Construction Management',
            shortDescription: 'We oversee project execution to ensure design accuracy, quality control, and smooth collaboration from groundbreaking to completion.',
            description: `We assist clients throughout the construction phase by coordinating with engineers, contractors, and suppliers to maintain design integrity and quality standards. Our role includes site visits, drawing clarifications, and progress evaluations to ensure that the project is executed according to plans, budget, and timeline.
                        This service provides clients with confidence that their investment is professionally managed from start to completion.`,
            icon: <BuildDesignIcon theme='dark' height={50} width={50} />
        },
        {
            name: 'Renovation & Adaptive Reuse',
            shortDescription: 'We revitalize existing spaces with modern solutions that improve functionality while preserving architectural character.',
            description: `We specialize in transforming existing structures into refreshed, functional, and contemporary spaces. Whether it is a residential renovation, commercial upgrade, or adaptive reuse project, we carefully assess structural conditions and spatial potential to deliver thoughtful improvements without compromising the building’s character.
                        Our approach enhances usability, improves performance, and extends the lifespan of existing spaces while maintaining cost efficiency and sustainability.`,
            icon: <BuildDesignIcon theme='dark' height={50} width={50} />
        },
        {
            name: '3D Visualization & Architectural Rendering',
            shortDescription: 'We deliver realistic 3D renderings that bring designs to life, helping clients visualize spaces before construction begins.',
            description: `We provide high-quality 3D visualizations and renderings to help clients clearly understand the design before construction begins. Through realistic imagery and spatial simulations, we communicate materials, lighting, scale, and atmosphere with clarity and precision.
                        This service supports decision-making, marketing presentations, and investor proposals by transforming technical drawings into immersive visual experiences.`,
            icon: <BuildDesignIcon theme='dark' height={50} width={50} />
        }
    ];

    const getServices = () => {
        return servicesDetails.map((service, key) => {
            return (<div id='rm-services-item' key={key}>
                <div id='rm-service-item-icon'>{service.icon}</div>
                <h4 id='rm-service-item-name'>{service.name}</h4>
                <p id='rm-service-item-desc'>{service.shortDescription}</p>
            </div>)
        })
    }
    return (<div id='rm-services-wrapper'>
        <h2 id='rm-services-header'>Our Services</h2>
        <div id='rm-services-content'>{getServices()}</div>
    </div>)
};

export default Services;
