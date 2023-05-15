import styled from "styled-components"
import { Snackbar as SnackbarType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import LoadingCircle from "../../../components/LoadingCircle";
import React from "react";


const colorMapping = (theme: any, status: string) : string =>
{
  switch(status)
  {
    case 'success': return theme.colors.success;
    case 'error': return theme.colors.danger;
    case 'processing': return theme.colors.dark;    
    default: return 'blue';
  }
}

const Snackbar = styled.div<{status: string}>`
  background-color: ${props => colorMapping(props.theme, props.status)};
  color: white;
  width: 350px;
  height: 50px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 7px;
  box-shadow: 0 4px 4px lightgrey;

  & > div:last-child{
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.large};
  }

  .icon {
    font-size: 25px;
    cursor: pointer;
  }

  .undo{
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

interface Props extends SnackbarType {
  onClose?: (id: string | undefined) => void,
  onUndo?: () => void
}

export default React.forwardRef<HTMLDivElement, Partial<Props>>(({id, status='success', message='', onClose, onUndo}, ref) => {
    return (
        <Snackbar status={status} ref={ref}>
          {
            status === 'success' && 
            <>
              <div>{message}</div>

              <div>
                <div className="undo" onClick={() => onUndo?.()}>Undo</div>
                <FontAwesomeIcon icon={faClose} className="icon" onClick={() => onClose?.(id)}/>
              </div>
            </>
          }
          {
            status === 'processing' && 
            <>
              <div>
                <LoadingCircle color="white"/>
                <div>Processing</div>
              </div>
            </>
          }
          {
            status === 'error' && 
            <>
              <div>{message}</div>
              <FontAwesomeIcon icon={faClose} className="icon" onClick={() => onClose?.(id)}/>
            </>
          }
        </Snackbar>
    )
});