import styled from "styled-components";
import Form from "../common/Form";


const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

function Signin()
{
    return (
    <FormWrapper>
        <Form action="signin"/>
    </FormWrapper>);
}

export default Signin;