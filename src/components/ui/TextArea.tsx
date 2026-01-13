import * as React from 'react';
import { generateElementId } from "../../common/util";
import { ComponentPrefix } from '../constants';

interface TextAreaProps {
    id: string;
    value: string;
    textAlignment?: 'left' | 'center' | 'right' | 'justify';
};

const TextArea = (props: TextAreaProps) => {
    const customStyle: React.CSSProperties = {
        textAlign: props.textAlignment ? props.textAlignment : 'left'
    };

    return(<>
        <div id={generateElementId(ComponentPrefix.TextArea, 'wrapper')}>
            <p id={generateElementId(ComponentPrefix.TextArea, 'input')} style={customStyle}>{props.value}</p>
        </div>
    </>);
}

export default TextArea;