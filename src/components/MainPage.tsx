import { DevData, devHeader, DevProfileFiles } from "../common/constants";
import { generateElementId } from "../common/util";
import ImageDisplay from "./ui/ImageDisplay";
import TextField from "./ui/TextField";

const componentPrefix = 'mainpage-component';
const MainPage = () => {
    const devMainHeader = devHeader.map((header) => {
        return <TextField id={header.id} textType={header.textType} value={header.value} textAlignment={header.textAlignment} />;
    });

    return (<>
        <div id={generateElementId(componentPrefix, 'wrapper')}>
            <div id={generateElementId(componentPrefix, 'profile', 'section')}>
                <div id={generateElementId(componentPrefix, 'profile', 'picture')}>
                    <ImageDisplay
                        id={DevData.Name}
                        src={DevProfileFiles.ProfilePictureThumbnail}
                        displayStyle={{ frameType: 'round', frameColor: 'none', frameWidth: 'medium' }} />
                </div>
                {devMainHeader}
            </div>
        </div>
    </>);
}

export default MainPage