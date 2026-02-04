import { ArchitectDetails } from "../assets/constants";

const Contact = () => {
    const getDetails = () => {
        const details = [
            { type: 'phone', value: ArchitectDetails.PhoneNumber },
            { type: 'email', value: ArchitectDetails.Email },
            { type: 'location', value: ArchitectDetails.Location },
            { type: 'social', value: ArchitectDetails.Facebook },
            { type: 'social', value: ArchitectDetails.Instagram  }
        ];

        return details.map(detail => (<div key={detail.type}>{detail.value}</div>))
    }
    return (<div id='rm-contactus-wrapper'>
        <div id='rm-contactus-detials'>
            {getDetails()}
        </div>
    </div>)
};

export default Contact;