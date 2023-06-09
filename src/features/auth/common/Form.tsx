import styled from "styled-components";
import {Link} from "react-router-dom";
import Button from "../../../components/Button";
import Textfield from "../../../components/Textfield";
import Checkbox from "../../../components/Checkbox";
import {form} from '../../../../config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const _Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    flex-direction: column;
    box-shadow: ${props => props.theme.shadow.medium};
    border-radius: 20px;
    font-family: 'Inter';
`;

const Header = styled.div`
  background-color: ${props => props.theme.colors.primary};
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
    margin-bottom: 60px;
`;

const InputWrapper = styled.div`
  padding-bottom: 20px;
  width: 100%;
`;

const Title = styled.h2`
    margin: 0;
    color: white;
    font-family: 'Inter';
`;

const OtherAction = styled.div`
  font-size: 12px;
  color: #747474;
  display: flex;
  justify-content: end;
`;

type Props = {
    action: 'signin' | 'signup',
    onSignin?: (username: string, password: string) => void,
    onSignup?: (username: string, password: string, fullname: string) => void,
}

function Form({action, onSignin, onSignup} : Props)
{
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullname, setFullname] = useState<string>('');

    return (
        <_Form>
            <Header>
                <FontAwesomeIcon icon={faUser} style={{'color': 'white', 'position': "absolute", "left" : "25px", "fontSize" : "30px"}}/>
                <Title>{form[action].title}</Title>
            </Header>
            <FormContent>
                <InputWrapper>
                    <Textfield flexible={true} xPadding={15} yPadding={12} placeholder="Username" handleInputChange={val => setUsername(val)}/>
                </InputWrapper>
                <InputWrapper>
                    <Textfield flexible={true} xPadding={15} yPadding={12} placeholder="Password" type="password" handleInputChange={val => setPassword(val)}/>
                </InputWrapper>
               {
                action === 'signup' && 
                <InputWrapper>
                    <Textfield flexible={true} xPadding={15} yPadding={12} placeholder="Username" handleInputChange={val => setFullname(val)}/>
                </InputWrapper>
               }
                <InputWrapper>
                    <Button flexible={true} onClick={() => action === "signin" ? onSignin?.(username, password) : onSignup?.(username, password, fullname)}>{form[action].buttonTitle}</Button>
               </InputWrapper>
               {
                    action === 'signup' && <InputWrapper> <Checkbox title="Administrator"/> </InputWrapper>
               }
                <InputWrapper>
                    <OtherAction>
                        <div>
                            <span>{form[action].otherActionName}</span>
                            {
                                form[action].otherActionLink && form[action].otherActionLinkName && 
                                <Link to={form[action].otherActionLink}>{' ' + form[action].otherActionLinkName}</Link>
                            }
                        </div>
                    </OtherAction>
                </InputWrapper>
            </FormContent>
        </_Form>
    );
}

export default Form;