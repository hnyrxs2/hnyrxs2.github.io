import { ArchitectDetails } from '../assets/constants';
import type { IconProps } from '../components/icons/types';
import { EmailIcon, FacebookIcon, PhoneIcon, LocationIcon } from '../components/icons';

const Contact = () => {
    const iconSize: IconProps = {
        height: 20,
        width: 20
    };

    const normalizeURL = (input: string) => {
        try {
            const url = input.match(/^https?:\/\//i)
                ? new URL(input)
                : new URL('https://' + input);

            url.hostname = url.hostname.replace(/^www\./i, '');

            return url.hostname + url.pathname;
        } catch {
            return input;
        }
    }

    const details = [
        { type: 'phone', value: ArchitectDetails.PhoneNumber, icon: <PhoneIcon height={iconSize.height} width={iconSize.width} /> },
        { type: 'email', value: ArchitectDetails.Email, icon: <EmailIcon height={iconSize.height} width={iconSize.width} /> },
        { type: 'location', value: ArchitectDetails.Location, icon: <LocationIcon height={iconSize.height} width={iconSize.width} /> },
        { type: 'link', value: ArchitectDetails.Facebook, icon: <FacebookIcon height={iconSize.height} width={iconSize.width} /> }
    ];

    return (<div id='rm-contactus-wrapper'>
        <div id='rm-contactus-folder-top'></div>
        <div id='rm-contactus-details'>
            {details.map((detail, key) =>
                (<div id='rm-contactus-item' key={key}>
                    <div id='rm-contactus-item-icon'>{detail.icon}</div>
                    {detail.type === 'link' ? <a target='_blank' href={detail.value} id='rm-contactus-item-value'>{normalizeURL(detail.value)}</a> :
                        <span id='rm-contactus-item-value'>{detail.value}</span>}
                </div>)
            )}
        </div>
    </div>);
};

export default Contact;