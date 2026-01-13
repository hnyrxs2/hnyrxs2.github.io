import { DevData, DevProfileFiles } from '../../common/constants';
import { generateElementId } from '../../common/util';
import { ComponentPrefix } from '../constants';
import TextArea from '../ui/TextArea';
import TextField from '../ui/TextField';

const Profile = () => {
    console.log(generateElementId(ComponentPrefix.Profile, 'wrapper'));
    return (<>
        <div id={generateElementId(ComponentPrefix.Profile, 'wrapper')}>
            <div id={generateElementId(ComponentPrefix.Profile, 'header')}>
                <img id={generateElementId(ComponentPrefix.Profile, 'headerImg')} src={DevProfileFiles.ProfilePictureThumbnail} />
                <div id={generateElementId(ComponentPrefix.Profile, 'headerText')}>
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