import styled, {keyframes} from "styled-components";


type Props = {
    size: number,
    thickness: number,
    color: string,
}

const RotatingAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingCircle = styled.div<Props>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    border: ${props => props.thickness}px solid ${props => props.theme.colors[props.color]};
    border-right-color: transparent;
    border-bottom-color: transparent;
    animation: ${RotatingAnimation} 1s linear infinite;
`;

export default function({size = 20, color = 'primary', thickness = 3} : Partial<Props>) : JSX.Element {
    return <LoadingCircle size={size} color={color} thickness={thickness}></LoadingCircle>
}