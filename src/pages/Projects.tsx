// import type React from 'react';

import React from 'react';
import { ProjectTiles } from '../assets/constants';
import { useAppDispatch } from '../store/hooks';
import { openOverlay, setOverlayContents } from '../store/uiSlice';

const Projects = () => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        const contents =  ProjectTiles.map((proj, key) => {
            return (<div id='rm-project-tile-overlay-item' key={key}>
                <img id='rm-project-tile-overlay-img' src={proj.src}></img>
                <span id='rm-project-tile-overlay-title'>{proj.title}</span>
                <p id='rm-project-tile-overlay-desc'>{proj.description}</p>
            </div>);
        })

        dispatch(setOverlayContents(contents));
    });

    const openTile = (key: number) => {
        dispatch(openOverlay({index: key}));
    };

    const getProjectTiles = () => {
        return ProjectTiles.map((proj, key) => {
            return (<div id='rm-project-tile-item' key={key} onClick={() => openTile(key)}>
                <img id='rm-project-tile-img' src={proj.src}></img>
                <span id='rm-project-tile-title'>{proj.title}</span>
                <p id='rm-project-tile-desc'>{proj.description}</p>
            </div>);
        })
    }
    return (<div id='rm-project-tiles-wrapper'>
        <h2>Our Projects</h2>
        <div id='rm-project-tiles'>{getProjectTiles()}</div>
    </div>)
};

export default Projects;
