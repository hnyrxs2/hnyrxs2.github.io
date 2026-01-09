interface TextFieldProps {
    textValue?: string
}

const TextField = (props: TextFieldProps) => {
    return (
        <div id='textfield-component-wrapper'>
            <input type="text" id='textfield-component-input' value={props.textValue}/>
        </div>
    )
};

export default TextField;