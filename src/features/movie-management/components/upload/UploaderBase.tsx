import styled from "styled-components";
import { useRef } from "react";


const DashedBox = styled.div`
    width: 85%;
    height: 85%;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='white' stroke-width='5' stroke-dasharray='7%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 24px;
    transition: all 0.3s;
`;

const DashedBoxContent = styled.div`
    height: 100%;
    color: #436787;
    font-weight: medium;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    & * {
        pointer-events: none;
    }

    img{
        margin-bottom: 10px;
        transition: all 0.3s;
    }
    
    p {
        text-align: center;
        span{
            color: ${props => props.theme.colors.primary};
        }
    }
`;

type Props = {
    iconPath?: string,
    onClick?: () => void,
    onDragEnter? : (fileList: FileList) => void,
    onDrop?: (fileList: FileList) => void,
}

export default function ({iconPath = '', onClick, onDragEnter, onDrop} : Props) : JSX.Element
{
    const dashesRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if(imgRef.current && dashesRef.current)
        {
            dashesRef.current.style.width = '87%';
            dashesRef.current.style.width = '87%';

            imgRef.current.style.height = '60px';
            imgRef.current.style.width = '60px';
        }
        onDragEnter?.(e.dataTransfer.files);
    };
    
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if(imgRef.current && dashesRef.current)
        {
            dashesRef.current.style.width = '85%';
            dashesRef.current.style.width = '85%';

            imgRef.current.style.height = '50px';
            imgRef.current.style.width = '50px';
        }
    }
 
    const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        onDrop?.(e.dataTransfer.files);
    }

    return (
      <DashedBox
        ref={dashesRef}
        onClick={onClick}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleOnDrop(e)}
      >
        <DashedBoxContent>
          <img src={iconPath} alt="" ref={imgRef} width={50} height={50} />
          <p>
            Drop your image here, or <span>click</span>
          </p>
        </DashedBoxContent>
      </DashedBox>
    );
}