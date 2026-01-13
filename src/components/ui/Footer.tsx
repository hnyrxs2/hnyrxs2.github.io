import * as React from 'react';
import { generateElementId } from '../../common/util';
import { ComponentPrefix } from '../constants';
import Button from './Button';
import IconLinkedIn from './icons/IconLinkedIn';

export interface FooterProps {
    id: string;
    children?: React.ReactNode;
    childrenDirection?: 'row' | 'column';
    position?: 'center' | 'left' | 'right';
}

const Footer = (props: React.PropsWithChildren<FooterProps>) => {

    const footerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: props.childrenDirection ?? 'row',
        justifyContent: props.position ?? 'center',
        alignItems: props.position ?? 'center',
    };

    return (<>
        <div id={generateElementId(ComponentPrefix.Footer, 'wrapper')} style={footerStyle}>
            {props.children}
            <Button id='linkedin' title='LinkedIn' icon={<IconLinkedIn />} size='small'/>
        </div>
    </>);
};

export default Footer;
