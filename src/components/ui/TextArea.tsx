import * as React from 'react';
import { generateElementId } from "../../common/util";

interface TextAreaProps {
    id: string;
    value: string;
    textAlignment?: 'left' | 'center' | 'right' | 'justify';
};

const componentPrefix = 'textarea-component';

const TextArea = (props: TextAreaProps) => {
    const customStyle: React.CSSProperties = {
        textAlign: props.textAlignment ? props.textAlignment : 'left'
    };

    return(<>
        <div id={generateElementId(componentPrefix, 'wrapper')}>
            <p id={generateElementId(componentPrefix, 'input')} style={customStyle}>{props.value}</p>
        </div>
    </>);
}

export default TextArea;