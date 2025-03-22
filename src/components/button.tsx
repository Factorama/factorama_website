interface ButtonProps {
    height?: string;
    width?: string;
    size?: string;
    textMessage?: string;
    onClick?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    padding?: string;
    margin?: string;
    fontSize?: string;
    fontWeight?: string;
    fontColor?: string;

}

export default function SimpleButton(props: ButtonProps) {
    const {
        height = '',
        width = '',
        size = '',
        textMessage = '',
        onClick = '',
        color = '',
        borderColor = '',
        borderWidth = '',
        borderRadius = '',
        padding = '',
        margin = '',
        fontSize = '',
        fontWeight = '',
        fontColor = ''
    } = props;

    return (
        <button className={` ${color} ${size} ${onClick}  ${borderColor} ${borderWidth} ${borderRadius} ${padding} ${margin} ${fontSize} ${height} ${width} ${fontWeight} ${fontColor}`}>
            {textMessage}
        </button>
    )
}