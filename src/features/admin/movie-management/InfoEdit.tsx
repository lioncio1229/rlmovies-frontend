import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Textfield from "../../../components/ui/Textfield";
import TextArea from "../../../components/ui/TextArea";
import Button from "../../../components/ui/Button";

const Background = styled.div`
  background-color: white;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0%;
`;

const Paper = styled.div`
    height: 100vh;
    width: 450px;
    background-color: white;
    box-shadow: -8px 0 8px #0000002f;
    
    position: absolute;
    right: 0;
    padding: 30px;
    box-sizing: border-box;

    overflow: auto;
`;

const CloseButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Title = styled.p`
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.text};
`;

const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 14px 0;
`;

export default function InfoEdit() : JSX.Element {
    return (
        <>
            <Background/>
            <Paper>
                <CloseButtonWrapper>
                    <FontAwesomeIcon icon={faXmark} fontSize={30} style={{"cursor": "pointer", "color": "grey"}} />
                </CloseButtonWrapper>
                <Title>Movie Name</Title>
                <Textfield flexible={true} radius={10}></Textfield>
                <Title>Video Description</Title>
                <TextArea></TextArea>
                <Title>Video Thumbnail</Title>
                <ImageContainer>
                    <Title>Click to update</Title>
                </ImageContainer>
                <Title>Price</Title>
                <Textfield flexible={true} radius={10}></Textfield>
                <ButtonContainer>
                    <Button radius={0}>OK</Button>
                    <Button radius={0}>Delete</Button>
                </ButtonContainer>
            </Paper>
        </>
    )
}