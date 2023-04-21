import styled from 'styled-components';
import {theme} from '../../../config.json';

type ButtonParams = {
    text: string,
    size?: number,
    xPadding?: number,
    yPadding?: number,
    radius?: number,
    flexible?: boolean,
}

function Button({text, size = 20, xPadding = 50, yPadding = 10, radius = 25, ...props} : ButtonParams)
{
    const StyledButton = styled.button`
        font-size: ${size}px;
        background-color: ${theme.primary};
        padding: ${yPadding}px ${xPadding}px;
        color: white;
        border-style: none;
        font-family: 'Inter';
        border-radius: ${radius}px;
        ${props.flexible && 'width: 100%;'}
        cursor: pointer;
    `;

    return (
        <StyledButton> {text}
        </StyledButton>
    )
}

export default Button;