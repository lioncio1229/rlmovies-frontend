import React from 'react';
import styled from 'styled-components';


interface StyledButtonProps {
    xPadding?: number,
    yPadding?: number,
    radius?: number,
    size?: number,
    flexible?: boolean,
}

interface Props extends StyledButtonProps {
    children?: React.ReactNode,
}

const StyledButton = styled.button<StyledButtonProps>`
    font-size: ${props => props.size || props.theme.fontSizes.large}px;
    background-color: ${props => props.theme.colors.primary};
    padding: ${props => props.yPadding || 0}px ${props => props.xPadding || 0}px;
    color: white;
    border-style: none;
    font-family: 'Inter';
    border-radius: ${props => props.radius}px;
    ${props => props.flexible && 'width: 100%;'}
    cursor: pointer;
`;

StyledButton.defaultProps = {
    xPadding: 50,
    yPadding: 10,
    radius: 25,
}

function Button(props : Props) : JSX.Element
{
    return (
        <StyledButton {...props} > {props.children} </StyledButton>
    )
}

export default Button;