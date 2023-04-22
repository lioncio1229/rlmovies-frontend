import styled from "styled-components";
import Form from "../components/Form";


const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

function Signup()
{
    return (
    <FormWrapper>
        <Form action="signup"/>
    </FormWrapper>);
}

export default Signup;