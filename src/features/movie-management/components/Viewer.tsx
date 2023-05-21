import styled from "styled-components";
import Button from "../../../components/Button";
import { useRef, useEffect } from 'react';


type Props = {
    src?: string,
    viewerType?: 'image' | 'movie',
    onUpdate?: (fileList: FileList) => void,
}

const ViewerBox = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    
    & :first-child{
        width: 100%;
        height: 100%;
    }

    & :last-child{
        position: absolute;
        top: 53%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s;
    }

`;

export default function ({src='',  viewerType='image', onUpdate} : Props) : JSX.Element
{
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(buttonRef.current) buttonRef.current.style.opacity = '0';
    }, []);

    const handleMouseOver = () => {
        if(buttonRef.current)
        {
            const style = buttonRef.current.style;
            style.opacity = '1';
            style.top = '50%';
        }
    }
    
    const handleMouseOut = () => {
        if(buttonRef.current)
        {
            const style = buttonRef.current.style;
            style.opacity = '0';
            style.top = '53%';
        }
    }

    const handleClick = () => {
        inputRef.current?.click();
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) onUpdate?.(e.target.files);
    }

    return (
        <ViewerBox onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {
                viewerType === 'image' ?
                <img src={src} /> : <></>
            }
            <input ref={inputRef} type="file" onChange={handleOnChange} hidden/>
            <Button ref={buttonRef} flexible={false} onClick={handleClick}>Update</Button>
        </ViewerBox>
    )
}