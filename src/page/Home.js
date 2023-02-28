import styled from "styled-components";
import Logo from "../assets/LogoWhite.png";

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
    </ContainerPage>
  );
}

const ContainerPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #ff7a00 0%, rgba(255, 122, 0, 0.56) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LogoImage = styled.img`
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

export default Home;
