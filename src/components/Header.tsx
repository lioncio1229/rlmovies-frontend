import styled from "styled-components";
import {title} from '../../config.json';
import { Link } from "react-router-dom";

interface Navigation{
    name: string,
    path: string,
}

interface Props {
    navName?: string,
    title?: string,
    navigations?: Navigation[]
}

const Header = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: ${props => props.theme.colors.primary};
`;

const Container = styled.div`
    height: 100%;
    padding: 0 ${props => props.theme.spacing.large};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h2`
    color: white;
    font-family: 'Inter';
    margin: 0;
`
const Nav = styled.div`
    height: 100%;
    display: flex;
    color: cadetblue;
`;

const NavButton = styled.div`
    color: white;
    font-size: ${props => props.theme.fontSizes.medium};
    margin-left: ${props => props.theme.spacing.medium};
`

const CustomLink = styled(Link)`
    color: white;
    text-decoration: none;
`
const CustomLink2 = styled(Link)`
    color: ${props => props.theme.colors.primary};
    background-color: white;
    text-decoration: none;
    padding: 20px;
`;

export default function(props: Props)
{
    return (
        <Header>
            <Container>
                <Title>
                    {title}
                </Title>
                <Nav>
                    {
                        props.navigations && props.navigations.map(item => (
                            <NavButton>
                                {
                                    item.name === props.navName ? 
                                    <CustomLink2 to={item.path}>{item.name}</CustomLink2> :
                                    <CustomLink to={item.path}>{item.name}</CustomLink>
                                }
                            </NavButton>
                        ))
                    }
                    <NavButton>Logout</NavButton>
                </Nav>
            </Container>
        </Header>
    )
}