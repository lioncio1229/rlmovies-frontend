import styled from "styled-components";


interface TextAreaProps {
    radius?: number,
}

interface Props extends TextAreaProps {
    rows?: number,
    value?: string | number,
    handleChange?: (input: string) => void,
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

export default function({radius, value, rows = 5, handleChange}: Props) : JSX.Element
{
    return (
        <TextArea radius={radius} rows={rows} onChange={(e) => handleChange?.(e.target.value)} value={value}></TextArea>
    );
}