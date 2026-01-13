import { generateElementId } from "../../common/util";
import { ComponentPrefix } from "../constants";
import type { ButtonProps } from './Button';
import Button from "./Button";

interface ToolbarProps {
    id: string;
    headerText: string;
    buttons: ButtonProps[];
}

const Toolbar = (props: ToolbarProps) => {
    const buttonElements = props.buttons.map((button) => {
        return (<Button key={button.id} id={button.id} icon={button.icon} title={button.title} size='small'/>);
    });

    return (<>
        <div id={generateElementId(ComponentPrefix.Toolbar, 'wrapper')}>
            <div id={generateElementId(ComponentPrefix.Toolbar, 'headerText')}><h1>{props.headerText}</h1></div>
            <div id={generateElementId(ComponentPrefix.Toolbar, 'buttons')}>{buttonElements}</div>
        </div>
    </>);
};

export default Toolbar;