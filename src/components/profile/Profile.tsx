import { DevProfileFiles } from '../../fileUrl';
import TextField from '../ui/TextField';

const Profile = () => {
    return(<>
        <h1>THIS IS MY PROFILE</h1>
            <img src={DevProfileFiles.ProfilePictureThumbnail}/>
            <TextField textValue='Textfield component: hello props from profile'/>

    </>)
};

export default Profile;