import styled from "styled-components";
import Logo from "../assets/LogoWhite.png";
import Return from "../assets/icons/return.png";
import Next from "../assets/icons/next.png";

function Home() {
  return (
    <ContainerPage>
      <Header>
        <LogoImage src={Logo} />
        <Row>
          <Row>
            <Text>Olá, </Text>
            <Text> Name</Text>
          </Row>
          <Button>N</Button>
        </Row>
      </Header>
      <ContainerResume>
        <ButtonsMonth>
          <BackButton />
          <Month>Mês</Month>
          <NextButton />
        </ButtonsMonth>
        <Column>
          <Label>Receitas</Label>
          <Revenues>R$ 1.000,00</Revenues>
        </Column>
        <Column>
          <Label>Despesas</Label>
          <Expenses>R$ 500,00</Expenses>
        </Column>
        <Column>
          <Label>Balanco</Label>
          <Balance>R$ 500,00</Balance>
        </Column>
      </ContainerResume>
      <ContainerRegister>
        <ColumnRegister>
          <Label>Data</Label>
          <InputDate />
        </ColumnRegister>
        <ColumnRegister>
          <Label>Categoria</Label>
          <InputText />
        </ColumnRegister>
        <ColumnRegister>
          <Label>Título</Label>
          <InputText />
        </ColumnRegister>
        <ColumnRegister>
          <Label>Valor</Label>
          <InputValue />
        </ColumnRegister>
        <ButtonRegister>Registrar</ButtonRegister>
      </ContainerRegister>
      <ContainerList>
        <RowList>
          <Label>Data</Label>
          <Label>Categoria</Label>
          <Label>Título</Label>
          <Label>Valor</Label>
          <ButtonSelect />
        </RowList>
        <List></List>
      </ContainerList>
    </ContainerPage>
  );
}

const ContainerPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #ff7a00 0%, rgba(255, 122, 0, 0.56) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LogoImage = styled.img`
  width: 150px;
  margin-left: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 65px;
  height: 65px;
  margin-right: 20px;
  border-radius: 100%;
  border: none;
  background: #fff;
  cursor: pointer;
  font-size: 20px;
`;

const ContainerResume = styled.div`
  width: 920px;
  height: 80px;
  margin-top: -15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  align-items: center;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const ButtonsMonth = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  background: #ff7a00;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-image: url(${Return});
  background-repeat: no-repeat;
  background-position: center;
`;

const Month = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ff7a00;
`;

const NextButton = styled.button`
  width: 40px;
  height: 40px;
  background: #ff7a00;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-image: url(${Next});
  background-repeat: no-repeat;
  background-position: center;
`;

const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  margin-top: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ff7a00;
`;

const Revenues = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #1847bf;
`;

const Expenses = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #bf1818;
`;

const Balance = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const ContainerRegister = styled.div`
  margin-top: 20px;
  width: 920px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const ColumnRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const InputDate = styled.input`
  width: 140px;
  height: 40px;
  border: 1px solid #ff7a00;
  border-radius: 10px;
`;

const InputText = styled.input`
  width: 140px;
  height: 40px;
  border: 1px solid #ff7a00;
  border-radius: 10px;
`;

const InputValue = styled.input`
  width: 140px;
  height: 40px;s
  border: 1px solid #ff7a00;
  border-radius: 10px;
`;

const ButtonRegister = styled.button`
  width: 140px;
  height: 43px;
  margin-top: 31px;
  color: #fff;
  background-color: #ff7a00;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const ContainerList = styled.div`
  margin-top: 20px;
  width: 920px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const RowList = styled.div`
  width: 92%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const List = styled.div``;

const ButtonSelect = styled.button`
  width: 40px;
  height: 40px;

  background: #ff7a00;
  border: none;
  border-radius: 10px;
`;

export default Home;
