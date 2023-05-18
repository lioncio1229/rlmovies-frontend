import styled from "styled-components";
import {title} from '../../../../config.json';
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
    height: 55px;
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
    display: flex;
    align-items: center;
`;

const NavButton = styled.div<{selected: boolean}>`
    font-size: ${props => props.theme.fontSizes.medium};
    margin-left: ${props => props.theme.spacing.medium};
    padding: 0 15px;
    line-height: 55px;
    height: 100%;
    background-color: ${props => props.selected ? 'white' : props.theme.colors.primary};
    color: white;

    .link{
        color: ${props => props.selected ? props.theme.colors.primary : 'white'};
        text-decoration: none;
    }
`

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
                        props.navigations && props.navigations.map((item, i) => (
                            <NavButton key={i} selected={item.name === props.navName}>
                                {
                                    <Link className="link" to={item.path}>{item.name}</Link>
                                }
                            </NavButton>
                        ))
                    }
                    <NavButton selected={false}>Logout</NavButton>
                </Nav>
            </Container>
        </Header>
    )
}