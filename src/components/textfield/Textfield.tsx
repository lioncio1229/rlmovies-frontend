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

function Textfield({xPadding = 10, yPadding = 10, type='string', radius = 25, ...props} : Props)
{
    const _input = styled.input`
        padding: ${yPadding}px ${xPadding}px;
        outline-style: none;
        border-radius: ${radius}px;
        border-style: none;
        background-color: #EBEBEB;
        ${props.flexible && 'width: 100%;'}
        box-sizing: border-box;
    `;
    return <_input type={type} onChange={(e) => props.onChange?.(e.target.value)} placeholder={props.placeholder}/>
}

export default Textfield;