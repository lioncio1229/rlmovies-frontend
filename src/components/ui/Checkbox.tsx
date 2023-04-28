import styled from "styled-components";


const StyledCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    margin: 0;
    font-size: 14px;
    color: ${prop => prop.theme.colors.text}
  }

  input{
    color: white;
    cursor: pointer;
    width: 20px;
    height: 20px;
    outline-color: blue;
  }
`;

interface Props {
    title?: string
}

function Checkbox(props: Props)
{
    return (
        <StyledCheckbox>
           <p>{props.title}</p>
           <input type="checkbox"/> 
        </StyledCheckbox>
    );
}

export default Checkbox;