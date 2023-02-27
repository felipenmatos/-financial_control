import styled from "styled-components";
import backgroundLogin from "./assets/BackgroundLogin.png";
import Logo from "./assets/Logo.png";

function Login() {
  return (
    <ContainerPage>
      <ContainerForm>
        <LogoImage src={Logo} />
        <Form>
          <Title>Login</Title>
          <InputLogin />
          <InputPassword />
          <Row>
            <Text>Ainda não possui cadastro?</Text>
            <Link>Cadastre-se</Link>
          </Row>
          <Button>Entrar</Button>
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

const Form = styled.form``;

const Title = styled.h1``;

const InputLogin = styled.input``;

const InputPassword = styled.input``;

const Row = styled.div``;

const Text = styled.p``;

const Link = styled.a``;

const Button = styled.button``;

export default Login;
