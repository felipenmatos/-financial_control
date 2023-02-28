import styled from "styled-components";
import backgroundLogin from "./assets/BackgroundLogin.png";
import Logo from "./assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function clickRegister() {
    navigate("/Register");
  }

  function clickHome() {
    navigate("/Home");
  }

  return (
    <ContainerPage>
      <ContainerForm>
        <LogoImage src={Logo} />
        <Form>
          <Title>Login</Title>
          <InputLogin placeholder="Login" />
          <InputPassword type="password" placeholder="Password" />
          <Row>
            <Text>Ainda não possui cadastro?</Text>
            <Link onClick={() => clickRegister()}>Cadastre-se</Link>
          </Row>
          <Button onClick={() => clickHome()}>Entrar</Button>
        </Form>
      </ContainerForm>
      <ContainerImage />
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
  background-image: url(${backgroundLogin});
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

export default Login;
