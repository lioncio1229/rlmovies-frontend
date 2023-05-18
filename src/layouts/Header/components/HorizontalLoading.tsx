import styled, {keyframes} from "styled-components";


const HorizontalBoxAnimation = keyframes`
  0%{
    left: -1%;
    width: 0%;
  } 
  35%{
    width: 70%;
  }
  100%{
    left: 100%;
    width: 0%;
  } 
`;

const HorizontalBox = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 5px;
    background-color: #c8dce2;

    & div{
        position: relative;
        height: 100%;
        background-color: #66bbf0;
        animation: ${HorizontalBoxAnimation} 1.2s ease-in-out alternate infinite;
        box-sizing: border-box;
    }
`;


export default function() : JSX.Element {
    return (
        <HorizontalBox>
            <div></div>
        </HorizontalBox>
    )
}