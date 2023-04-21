import styled from "styled-components";
import Form from "../components/form/Form";


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
        <Form title="Signin" buttonName="Signin"/>
    </FormWrapper>);
}

export default Signin;