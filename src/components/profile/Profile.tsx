import { DevData, DevProfileFiles } from '../../common/constants';
import { generateElementId } from '../../common/util';
import TextArea from '../ui/TextArea';
import TextField from '../ui/TextField';

const componentPrefix = 'profile-component';

const Profile = () => {
    console.log(generateElementId(componentPrefix, 'wrapper'));
    return (<>
        <div id={generateElementId(componentPrefix, 'wrapper')}>
            <div id={generateElementId(componentPrefix, 'header')}>
                <img id={generateElementId(componentPrefix, 'headerImg')} src={DevProfileFiles.ProfilePictureThumbnail} />
                <div id={generateElementId(componentPrefix, 'headerText')}>
                    <TextField id='devName' textType='header' value={DevData.Name} />
                    <TextField id='devPosition' textType='subheader' value={DevData.Position} />
                </div>

            </div>
            <TextArea
                id='devIntro'
                textAlignment='justify'
                value={DevData.Intro} />
        </div>
    </>)
};

export default Profile;