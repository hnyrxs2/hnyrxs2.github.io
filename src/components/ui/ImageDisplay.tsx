import * as React from 'react';

interface ImageDisplayProps {
    id: string;
    src: string;
    displayStyle?: {
        frameType: 'round' | 'square';
        frameColor: string;
        frameWidth: 'none' | 'medium' | 'thick'
    };
    altText?: string;
}

const ImageDisplay = (props: ImageDisplayProps) => {
    const { displayStyle } = props;
    const getCustomStyle = (): {
        frameStyle: React.CSSProperties;
        imgCustomStyle: React.CSSProperties
    } => {
        if (displayStyle) {
            const newStyle: React.CSSProperties = {
                aspectRatio: displayStyle.frameType === 'square' ? '1/1' : '0/1',
                borderWidth: displayStyle.frameWidth === 'none' ? '0' : displayStyle.frameWidth === 'medium' ? '2px' : '4px',
                borderRadius: displayStyle.frameType === 'round' ? '50%' : '0'
            };
            return {
                frameStyle: {
                    borderRadius: displayStyle.frameType === 'round' ? '50%' : 0,
                    background: displayStyle.frameColor ? displayStyle.frameColor : 'none',
                    padding: displayStyle.frameWidth === 'none' ? '0' : displayStyle.frameWidth === 'medium' ? '0.5em' : '1em',
                },
                imgCustomStyle: newStyle
            }
        }
        return {
            frameStyle: {},
            imgCustomStyle: {}
        }
    };

    const { frameStyle: borderCustomStyle, imgCustomStyle } = getCustomStyle();

    return (<>
        <div id='imagedisplay-component-wrapper' style={borderCustomStyle}>
            <img id={props.id} src={props.src} alt={props.altText} style={imgCustomStyle} />
        </div>
    </>);
}

export default ImageDisplay;