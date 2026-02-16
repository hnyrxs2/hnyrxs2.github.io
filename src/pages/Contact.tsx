import type { JSX } from 'react';

import { ArchitectDetails } from '../assets/constants';
import type { IconProps } from '../components/icons/types';
import { EmailIcon, FacebookIcon, PhoneIcon, LocationIcon, LinkedinIcon } from '../components/icons';

type ColumnType = 'contact' | 'studio' | 'social';

interface IDetails {
    type: ColumnType;
    value: string;
    icon?: JSX.Element,
    displayName?: string;
}
const Contact = () => {
    const iconSize: IconProps = {
        height: 20,
        width: 20
    };

    const details: IDetails[] = [
        { type: 'contact', value: ArchitectDetails.PhoneNumber, icon: <PhoneIcon height={iconSize.height} width={iconSize.width} /> },
        { type: 'contact', value: ArchitectDetails.Email, icon: <EmailIcon height={iconSize.height} width={iconSize.width} /> },
        { type: 'contact', value: ArchitectDetails.Location, icon: <LocationIcon height={iconSize.height} width={iconSize.width} /> },
        { type: 'social', value: ArchitectDetails.Facebook, icon: <FacebookIcon height={iconSize.height} width={iconSize.width} />, displayName: 'Facebook' },
        { type: 'social', value: ArchitectDetails.Linkedin, icon: <LinkedinIcon height={iconSize.height} width={iconSize.width} />, displayName: 'LinkedIn' },
        { type: 'studio', value: 'About' },
        { type: 'studio', value: 'Project' },
        { type: 'studio', value: 'Services' }];

    const getColumn = (columnType: ColumnType) => (<div id='rm-contactus-items'>
        <h3 id='rm-contactus-column-header'>{columnType.toLocaleUpperCase()}</h3>
        {details.filter(detail => detail.type === columnType).map((detail, key) =>
        (<div id='rm-contactus-item' key={key}>
            {detail.icon && <div id='rm-contactus-item-icon'>{detail.icon}</div>}
            {detail.type === 'social' ? <a target='_blank' href={detail.value} id='rm-contactus-item-value'>{detail.displayName}</a> :
                // to do: if studio, navigate to page i.e., About, Project, or Services
                detail.type === 'studio' ? <a id='rm-contactus-item-value'>{detail.value}</a> :
                <span id='rm-contactus-item-value'>{detail.value}</span>}
        </div>)
        )}
    </div>);

    return (<div id='rm-contactus-wrapper'>
        <div id='rm-contactus-folder-top'></div>
        <div id='rm-contactus-details'>
            <h1 id='rm-contactus-headertxt'>LET'S KEEP IN TOUCH</h1>
            <div id='rm-contactus-columns'>
                {getColumn('contact')}
                {getColumn('studio')}
                {getColumn('social')}
            </div>
        </div>
    </div>);
};

export default Contact;