import * as React from 'react';

import { generateElementId } from "../../common/util";
import { ComponentPrefix } from '../constants';

export interface TextFieldProps {
    id: string;
    textType: 'normal' | 'header' | 'subheader';
    textAlignment?: 'left' | 'center' | 'right';
    value: string;
};

const TextField = (props: TextFieldProps) => {
    const defaultStyle: React.CSSProperties = {
        fontSize: '1rem'
    };

    const headerStyle: React.CSSProperties = {
        fontSize: '2rem',
        fontWeight: 'bold'
    };

    const subheaderStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: 'bold'
    };

    const getFontStyle = () => {
        switch (props.textType) {
            case 'header':
                return headerStyle;
            case 'subheader':
                return subheaderStyle;
            case 'normal':
            default:
                return defaultStyle;
        }
    };

    const customStyle: React.CSSProperties = {
        ...getFontStyle(),
        textAlign: props.textAlignment ? props.textAlignment : 'left'
    }

    return (
        <div id={generateElementId(ComponentPrefix.TextField, 'wrapper')}>
            <input type='text' id={generateElementId(ComponentPrefix.TextField, props.id, 'input')} value={props.value} style={customStyle} />
        </div>
    )
};

export default TextField;