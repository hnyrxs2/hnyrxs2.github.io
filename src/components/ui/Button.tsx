import * as React from 'react';
import { generateElementId } from '../../common/util';
import { ComponentPrefix } from '../constants';

export interface ButtonProps {
    id: string;
    title: string;
    icon?: React.JSX.Element;
    onClick?: () => void;
    size: 'small' | 'medium' | 'large';
}

const Button = (props: ButtonProps) => {
    return (<>
        <div id={generateElementId(ComponentPrefix.Button, 'wrapper')}>
            <button id={props.id}>{props.icon}</button>
        </div>
    </>);
}

export default Button;