import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Textfield from "../../../components/Textfield";
import TextArea from "../../../components/TextArea";
import Button from "../../../components/Button";
import { MovieInfo } from "../types";
import GalleryIcon from '../assets/gallery.png';
import Uploader from "./Uploader";
import Viewer from "./Viewer";

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

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 14px 0;
`;

const Box = styled.div`
    width: 230px;
    height: 230px;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

type Props = {
    values: MovieInfo,
    onOk?: (v : MovieInfo) => void,
    onClose?: () => void,
    onDelete?: (id: string) => void,
    onFormChange?: (name: string, value: string | number | FileList) => void,
}

export default function InfoEdit({onOk, onClose, values, onFormChange, onDelete} : Props) : JSX.Element {
    

    const handleDrop = (files: FileList) => {
        onFormChange?.('image', files);
    }

    return (
        <>
            <Background onClick={onClose}/>
            <Paper>
                <CloseButtonWrapper>
                    <FontAwesomeIcon onClick={onClose} icon={faXmark} fontSize={30} style={{"cursor": "pointer", "color": "grey"}} />
                </CloseButtonWrapper>
                <Title>Movie Title</Title>
                <Textfield flexible={true} radius={10} handleInputChange={v => onFormChange?.('title', v)} value={values.title}></Textfield>
                <Title>Video Description</Title>
                <TextArea handleChange={v => onFormChange?.('description', v)} value={values.description}></TextArea>
                <Title>Video Thumbnail</Title>
                <Box>
                    {
                        values.imageUrl ? <Viewer src={values.imageUrl} viewerType="image"/> :
                        <Uploader iconPath={GalleryIcon} onDrop={handleDrop}/>
                    }
                </Box>
                <Title>Quantity</Title>
                <Textfield flexible={true} radius={10} handleInputChange={v => onFormChange?.('quantity', parseInt(v))} type="number" value={values.quantity}></Textfield>
                <Title>Price</Title>
                <Textfield flexible={true} radius={10} handleInputChange={v => onFormChange?.('price', parseInt(v))} type="number" value={values.price}></Textfield>
                <Title>Expiration</Title>
                <Textfield flexible={true} radius={10} handleInputChange={v => onFormChange?.('rentalExpiration', v)} value={values.rentalExpiration}></Textfield>
                <ButtonContainer>
                    <Button radius={0} onClick={() => onOk?.(values)}>OK</Button>
                    <Button radius={0} onClick={() => onDelete?.(values._id)}>Delete</Button>
                </ButtonContainer>
            </Paper>
        </>
    )
}