import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import LoadingCircle from "./LoadingCircle";

enum State {
    processing,
    success,
    error,
}

type Props = {
    state?: State,
    message?: string,
}

const Snackbar = styled.div<{color: string}>`
  background-color: ${props => props.theme.colors[props.color]};
  width: 300px;
  height: 50px;
  border-radius: 5px;
  position: fixed;
  bottom: 20px;
  left: 10px;
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

export default function ({state = State.processing, message=''} : Props) : JSX.Element {

    switch(state)
    {
        case State.processing:
            return (
                <Snackbar color="dark">
                    <div>{message}</div>
                    <LoadingCircle color="light"/>
                </Snackbar>
            );
        case State.success:
            return (
                <Snackbar color="success">
                    <div>{message}</div>
                    <div className="with-undo">
                        <div>Undo</div>
                        <FontAwesomeIcon icon={faClose} className="close-btn"/>
                    </div>
                </Snackbar>
            );
        default:
            return (
                <Snackbar color="danger">
                    <div>{message}</div>
                    <FontAwesomeIcon icon={faClose} className="close-btn"/>
                </Snackbar>
            );
    };
}