import * as React from 'react';

export interface ButtonProps {
    id: string;
    title: string;
    icon?: React.JSX.Element;
}

const Button = (props: ButtonProps) => {
    return (<>
        <div id='button-component-wrapper'>
            <button id={props.id}>{props.icon}</button>
        </div>
    </>);
}

export default Button;