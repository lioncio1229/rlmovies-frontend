import styled from "styled-components";


type Props = {
    width?: number,
    height?: number,
    iconPath?: string,
}

const UploaderBox = styled.div<Pick<Props, 'width' | 'height'>>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const DashedBox = styled.div`
    width: 85%;
    height: 85%;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='white' stroke-width='5' stroke-dasharray='7%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 24px;
`;


const DefaultContent = styled.div`
    height: 100%;
    color: #436787;
    font-weight: medium;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img{
        margin-bottom: 10px;
    }

    p {
        text-align: center;
        span{
            color: ${props => props.theme.colors.primary};
        }
    }
`;

export default function ({iconPath=''} : Pick<Props, 'iconPath'>) : JSX.Element
{
    return (
        <UploaderBox width={230} height={230}>
            <DashedBox>
                <DefaultContent>
                    <img src={iconPath} alt="" width={50} height={50}/>
                    <p>Drop your image here, or <span>click</span></p>
                </DefaultContent>
            </DashedBox>
        </UploaderBox>
    )
}