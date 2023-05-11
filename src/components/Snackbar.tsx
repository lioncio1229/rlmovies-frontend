import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import LoadingCircle from "./LoadingCircle";
import React from "react";

type Props = {
    status?: 'processing' | 'success' | 'error',
    message?: string,
    withUndo?: boolean,
    onUndo?: (e: React.MouseEvent<HTMLElement>) => void,
    onClose?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void,
}

const Snackbar = styled.div<{color: string}>`
  background-color: ${props => props.theme.colors[props.color]};
  width: 300px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
  box-sizing: border-box;

  & .close-btn{
    font-size: 25px;
    cursor: pointer;
}

& .with-undo{
    display: flex;
    align-items: center;
    gap: 30px;
    cursor: pointer;
    font-size: 15px;
   }
`;

Snackbar.defaultProps = {
    color: 'primary'
}

export default function ({status = 'success', message='', withUndo = false, onUndo, onClose} : Props) : JSX.Element {

    switch(status)
    {
        case 'processing':
            return (
                <Snackbar color="dark">
                    <div>{message}</div>
                    <LoadingCircle color="light"/>
                </Snackbar>
            );
        case 'success':
            return (
                <Snackbar color="success">
                    <div>{message}</div>
                    <div className="with-undo">
                        {withUndo && <div onClick={(e) => onUndo?.(e)}>Undo</div>}
                        <FontAwesomeIcon icon={faClose} className="close-btn" onClick={(e) => onClose?.(e)}/>
                    </div>
                </Snackbar>
            );
        default:
            return (
                <Snackbar color="danger">
                    <div>{message}</div>
                    <FontAwesomeIcon icon={faClose} className="close-btn" onClick={(e) => onClose?.(e)}/>
                </Snackbar>
            );
    };
}