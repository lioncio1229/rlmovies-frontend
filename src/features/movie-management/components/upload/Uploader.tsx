import styled from "styled-components";


type Props = {
    children?: JSX.Element
}

const UploaderBox = styled.div`
    width: 230px;
    height: 230px;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Uploading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.dark};
    font-size: ${props => props.theme.fontSizes.small};
`;

export default function ({children} : Props) : JSX.Element
{
    return (
        <UploaderBox>
            {children}
        </UploaderBox>
    )
}