import styled from "styled-components";
import Button from "../button/Button";
import Textfield from "../textfield/Textfield";
import {theme} from '../../../config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const _Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    flex-direction: column;
    box-shadow: 0 4px 4px #a8a8a8;
    border-radius: 20px;
`;

const Header = styled.div`
  background-color: ${theme.primary};
  width: 100%;
  height: 50px;
  margin-bottom: 65px;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FormContent = styled.div`
    width: 80%;
    margin-bottom: 80px;
`;

const InputWrapper = styled.div`
  padding-bottom: 30px;
  width: 100%;
`;

const Title = styled.h2`
    margin: 0;
    color: white;
    font-family: 'Inter';
`;

function Form()
{
    return (
        <_Form>
            <Header>
                <FontAwesomeIcon icon={faUser} style={{'color': 'white', 'position': "absolute", "left" : "25px", "fontSize" : "30px"}}/>
                <Title>Signin</Title>
            </Header>
            <FormContent>
                <InputWrapper>
                    <Textfield flexible={true} xPadding={15} yPadding={12} placeholder="Username"/>
                </InputWrapper>
                <InputWrapper>
                    <Textfield flexible={true} xPadding={15} yPadding={12} placeholder="Password" type="password"/>
                </InputWrapper>
                <InputWrapper>
                    <Button text="Signin" flexible={true}/>
                </InputWrapper>
            </FormContent>
        </_Form>
    );
}

export default Form;