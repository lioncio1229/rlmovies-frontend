import styled from "styled-components";
import Header from "../layouts/Header";
import MovieManagement from "../features/movie-management";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
`

export default function()
{
    return (
        <Wrapper>
            <Header navName="Movies" navigations={[{name: 'Movies', path: '/admin-movies'}, {name: 'Customers', path: '/customer'}]}/>
            <MovieManagement />
        </Wrapper>
    )
}