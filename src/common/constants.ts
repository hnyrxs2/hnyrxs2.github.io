// import IconLinkedIn from '../components/ui/icons/IconLinkedIn';
// import Button from '../components/ui/Button';
import type { TextFieldProps } from '../components/ui/TextField';

export enum DevProfileFiles {
    ProfilePicture = 'https://drive.google.com/file/d/1tx6jfWTCkucrJSDrTn-Hxw9N7B0nSLzY/view?usp=sharing',
    ProfilePictureThumbnail = 'https://drive.google.com/thumbnail?id=1tx6jfWTCkucrJSDrTn-Hxw9N7B0nSLzY&sx=800'
}

// TO-DO: pull data from google sheet, put it on state
export enum DevData {
    Name = 'Honey Rose Roxas',
    Position = 'Front-End Developer',
    Title = 'Engineer | Developer',
    Location = 'Bulacan, Philippines',
    Email = 'roxashoneyrose@gmail.com',
    Intro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export const DevHeader: TextFieldProps[] = [{
        id: 'name',
        value: DevData.Name,
        textAlignment: 'center',
        textType: 'header'
    },
{
        id: 'title',
        value: DevData.Title,
        textAlignment: 'center',
        textType: 'subheader'
    },
{
        id: 'location',
        value: DevData.Location,
        textAlignment: 'center',
        textType: 'normal'
    }];

// export const FooterButtons: React.JSX.Element[] = [
//     <Button id='linkedin' title='LinkedIn' icon={<IconLinkedIn/>}/>,
//     <Button id='github' title='GitHub' />,
//     <Button id='email' title='Email' />
// ];

// export const FooterContacts: React.PropsWithChildren<FooterProps>[] = [{
//     id: 'linkedin',
//     children: <Button id='linkedin' title='LinkedIn' />,
//     childrenDirection: 'row',
//     position: 'left'
// }];
