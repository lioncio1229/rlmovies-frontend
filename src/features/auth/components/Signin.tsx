import styled from "styled-components";
import Form from "../common/Form";
import { useNavigate } from "react-router-dom";


const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

function Signin()
{
    const navigate = useNavigate();
    const handleSignin = (username: string, password: string) : void => {
        console.log(username + ' ' + password);
        navigate('/admin-movies');
    }

    return (
    <FormWrapper>
        <Form action="signin" onSignin={handleSignin}/>
    </FormWrapper>);
}

export default Signin;