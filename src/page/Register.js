import styled from "styled-components";
import backgroundRegister from "../assets/BackgroundRegister.png";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function clickLogin() {
    navigate("/");
  }

  return (
    <ContainerPage>
      <ContainerImage />
      <ContainerForm>
        <LogoImage src={Logo} />
        <Form>
          <Title>Cadastro</Title>
          <InputLogin placeholder="Digite seu primeiro nome" />
          <InputPassword placeholder="Digite seu e-mail" />
          <InputPassword placeholder="Digite uma senha" />
          <InputPassword placeholder="Repita a senha" />
          <Row>
            <Text>Já possui cadastro?</Text>
            <Link onClick={() => clickLogin()}>Login</Link>
          </Row>
          <Button>Confirmar</Button>
        </Form>
      </ContainerForm>
    </ContainerPage>
  );
}

const ContainerPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background: #fff;
`;

const ContainerForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const ContainerImage = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(${backgroundRegister});
  background-size: 100% 100vh;
  background-repeat: no-repeat;
`;

const LogoImage = styled.img``;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const InputLogin = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #ff7a00;
  border-radius: 10px;
  outline: none;
  padding: 0px 5px;
  text-align: center;
  color: #939393;
`;

const InputPassword = styled.input`
  margin-top: 20px;
  width: 300px;
  height: 40px;
  border: 1px solid #ff7a00;
  border-radius: 10px;
  outline: none;
  padding: 0px 5px;
  text-align: center;
  color: #939393;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
`;

const Link = styled.a`
  color: #ff7a00;
  cursor: pointer;
  margin-left: 5px;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  color: #fff;
  background-color: #ff7a00;
  text-align: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export default Register;
