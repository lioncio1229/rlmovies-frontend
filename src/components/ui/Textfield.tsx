import styled from "styled-components";

interface InputProps {
    xPadding?: number,
    yPadding?: number,
    radius?: number,
    flexible?: boolean,
}

interface Props extends InputProps{
    type?: string,
    placeholder?: string,
    handleInputChange?: (value: string) => void,
}

const _input = styled.input<InputProps>`
    padding: ${props => props.yPadding}px ${props => props.xPadding}px;
    outline-style: none;
    border-radius: ${props => props.radius}px;
    border-style: none;
    background-color: ${props => props.theme.colors.secondary};
    ${props => props.flexible && 'width: 100%;'}
    box-sizing: border-box;
`;

_input.defaultProps = {
    xPadding: 10,
    yPadding: 10,
    radius: 25,
    flexible: false,
}

function Textfield(props : Props)
{
    return <_input type={props.type} {...props} onChange={(e : React.ChangeEvent<HTMLInputElement>) => props.handleInputChange?.(e.target.value)} placeholder={props.placeholder}/>
}

export default Textfield;