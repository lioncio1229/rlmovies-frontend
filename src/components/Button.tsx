import styled from 'styled-components';

type ButtonParams = {
    text: string,
    size?: number,
    xPadding?: number,
    yPadding?: number,
    radius?: number,
    flexible?: boolean,
}

const StyledButton = styled.button.attrs((props : ButtonParams | any) => {
    const {theme} = props;
    return {
        size: theme.fontSizes.large,
        xPadding: 50,
        yPadding: 10,
        radius: 25,
        flexible: props.flexible,
    };
}
) `
    font-size: ${props => props.theme.size}px;
    background-color: ${props => props.theme.colors.primary};
    padding: ${props => props.yPadding}px ${props => props.xPadding}px;
    color: white;
    border-style: none;
    font-family: 'Inter';
    border-radius: ${props => props.radius}px;
    ${props => props.flexible && 'width: 100%;'}
    cursor: pointer;
`;

function Button(props : ButtonParams)
{

    return (
        <StyledButton {...props} > {props.text} </StyledButton>
    )
}

export default Button;