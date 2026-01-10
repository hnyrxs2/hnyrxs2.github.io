import { generateElementId } from "../../common/util";
import type { ButtonProps } from './Button';
import Button from "./Button";

interface ToolbarProps {
    id: string;
    headerText: string;
    buttons: ButtonProps[];
}

const componentPrefix = 'toolbar-component';
const Toolbar = (props: ToolbarProps) => {
    const buttonElements = props.buttons.map((button) => {
        return (<Button key={button.id} id={button.id} icon={button.icon} title={button.title}/>);
    });

    return (<>
        <div id={generateElementId(componentPrefix, 'wrapper')}>
            <div id={generateElementId(componentPrefix, 'headerText')}><h1>{props.headerText}</h1></div>
            <div id={generateElementId(componentPrefix, 'buttons')}>{buttonElements}</div>
        </div>
    </>);
};

export default Toolbar;