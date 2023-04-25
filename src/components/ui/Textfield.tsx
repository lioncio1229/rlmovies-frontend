import styled from "styled-components";

interface Props {
    xPadding?: number,
    yPadding?: number,
    radius?: number,
    type?: string,
    flexible?: boolean,
    placeholder?: string,
    onChange?: (value: string) => void,
}

const _input = styled.input.attrs((props : Props | any) => ({
    xPadding: 10,
    yPadding: 10,
    radius: 25,
    flexible: props.flexible
})) `
    padding: ${props => props.yPadding}px ${props => props.xPadding}px;
    outline-style: none;
    border-radius: ${props => props.radius}px;
    border-style: none;
    background-color: ${props => props.theme.colors.secondary};
    ${props => props.flexible && 'width: 100%;'}
    box-sizing: border-box;
`;

function Textfield(props : Props)
{
    return <_input type={props.type} {...props}  onChange={(e) => props.onChange?.(e.target.value)} placeholder={props.placeholder}/>
}

export default Textfield;