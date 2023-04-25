import styled from "styled-components"
import Button from "../../../components/ui/Button";


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
    flex-grow: 1;
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

export default function()
{
    return (
      <Container>
        <Paper>
            <Top>
              <Button text="Add" radius={0}/>
            </Top>
            <List>
                <HeaderRow>
                  <Cell>Thumbnail</Cell>
                  <Cell>Name</Cell>
                  <Cell>Price</Cell>
                  <Cell>Action</Cell>
                </HeaderRow>
                {
                  Array(5).fill(10).map((_) => (
                    <Row>
                      <Cell>Zilzo zilzo zilzo</Cell>
                      <Cell>Name</Cell>
                      <Cell>Price</Cell>
                      <Cell>Action</Cell>
                    </Row>
                  ))
                }
            </List>
        </Paper>
      </Container>
    )
}