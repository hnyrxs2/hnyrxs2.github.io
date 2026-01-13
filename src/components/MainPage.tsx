import { DevData, DevHeader, DevProfileFiles } from '../common/constants';
import { generateElementId } from '../common/util';
import { ComponentPrefix } from './constants';
import Footer from './ui/Footer';
import ImageDisplay from './ui/ImageDisplay';
import TextField from './ui/TextField';

const MainPage = () => {
    const devMainHeader = DevHeader.map((header) => {
        return <TextField id={header.id} textType={header.textType} value={header.value} textAlignment={header.textAlignment} />;
    });

    return (<>
        <div id={generateElementId(ComponentPrefix.MainPage, 'wrapper')}>
            <div id={generateElementId(ComponentPrefix.MainPage, 'profile', 'section')}>
                <div id={generateElementId(ComponentPrefix.MainPage, 'profile', 'picture')}>
                    <ImageDisplay
                        id={DevData.Name}
                        src={DevProfileFiles.ProfilePictureThumbnail}
                        displayStyle={{ frameType: 'round', frameColor: 'none', frameWidth: 'medium' }}
                        altText={`${DevData.Name} profile picture`}
                    />
                </div>
                {devMainHeader}
            </div>
            <Footer id={generateElementId(ComponentPrefix.MainPage, 'footer')} />
        </div>
    </>);
}

export default MainPage