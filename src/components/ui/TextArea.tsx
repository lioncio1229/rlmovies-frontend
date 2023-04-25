import styled from "styled-components";


interface TextAreaProps {
    radius?: number,
}

interface Props extends TextAreaProps {
    rows?: number,
    handleChange?: (input: object) => void
}

const TextArea = styled.textarea<TextAreaProps>`
    background-color: ${props => props.theme.colors.secondary};
    resize: none;
    width: 100%;
    outline: none;
    border-radius: ${props => props.radius}px;
    border-style: none;
    padding: 10px;
    box-sizing: border-box;
`;

TextArea.defaultProps = {
    radius: 10,
}

export default function({radius, rows = 5}: Props) : JSX.Element
{
    return (
        <TextArea radius={radius} rows={rows}></TextArea>
    )
}