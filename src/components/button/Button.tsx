import styled from 'styled-components';
import {theme} from '../../../config.json';

type ButtonParams = {
    text: string,
    size?: number,
    xPadding?: number,
    yPadding?: number
}

function Button({text, size = 20, xPadding = 30, yPadding = 10} : ButtonParams)
{
    const StyledButton = styled.button`
        font-size: ${size};
        background-color: ${theme.primary};
        padding: ${yPadding}px ${xPadding}px;
        color: white;
        border-style: none;
        font-family: 'Inter';
        border-radius: 12px;
    `;

    return (
        <StyledButton> {text}
        </StyledButton>
    )
}

export default Button;