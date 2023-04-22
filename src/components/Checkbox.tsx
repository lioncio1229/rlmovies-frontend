import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Check = styled.input`
    color: white;
    cursor: pointer;
    width: 20px;
    height: 20px;
`;

const Text = styled.p`
    margin: 0;
    font-size: 14px;
    color: grey;
`

interface Props {
    title?: string
}

function Checkbox(props: Props)
{
    return (
        <Wrapper>
           <Text>{props.title}</Text>
           <Check type="checkbox"/> 
        </Wrapper>
    );
}

export default Checkbox;