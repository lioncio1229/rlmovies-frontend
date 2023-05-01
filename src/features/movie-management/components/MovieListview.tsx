import styled from "styled-components"
import Button from "../../../components/ui/Button";
import DotsButton from "../../../components/ui/DotsButton";
import { MovieInfo } from "../types";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Center)`
  height: 100%;
`;

const Paper = styled(Center)`
  flex-direction: column;
  justify-content: flex-start;
  width: 98%;
  height: 95%;
  background-color: white;
  box-shadow: ${props => props.theme.shadow.medium};
  border-radius: 25px;
  padding: 20px;
  box-sizing: border-box;
  color: ${props => props.theme.colors.primary};
  padding-right: 20px;
`;

const Top = styled(Center)`
  width: 100%;
  justify-content: flex-end;
  height: 50px;
`

const List = styled.div`
  width: 100%;
  height: 200px;
  flex-grow: 1;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Cell = styled.div`
    width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgrey;
`

const HeaderRow = styled(Row)`
  position: sticky;
  top: 0;
  background-color: white;
`

const Dots = styled(Cell)`
    flex-shrink: 0;
    width: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

type Props = {
  movies?: MovieInfo[],
  onAddClick?: () => void,
  onEditClick?: (id: string | undefined) => void,
}

export default function({movies, onAddClick, onEditClick} : Props) : JSX.Element
{
    return (
        <Container>
          <Paper>
              <Top>
                <Button radius={0} onClick={onAddClick}>Add</Button>
              </Top>
              <List>
                  <HeaderRow>
                    <Cell>Title</Cell>
                    <Cell>Price</Cell>
                    <Cell>Quantity</Cell>
                    <Cell>Expiration</Cell>
                    <Dots></Dots>
                  </HeaderRow>
                  {
                    movies && movies.map((movie, i) => (
                      <Row key={i}>
                        <Cell>{movie.title}</Cell>
                        <Cell>{movie.price}</Cell>
                        <Cell>{movie.quantity}</Cell>
                        <Cell>{movie.rentalExpiration}</Cell>
                        <Dots>
                          <DotsButton onClick={() => onEditClick?.(movie._id)}/>
                        </Dots>
                      </Row>
                    ))
                  }
              </List>
          </Paper>
        </Container>
    );
}