import { Container, Row, Col, Form, Button, Navbar } from "react-bootstrap";
import { useRef, useState } from "react";
import EmailProviderModal from "../../component/EmailProviderModal";
import { SendForgotPasswordRequest, SendLoginRequest } from "../../Action/api";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const loginEmail = useRef("");
  const loginPassword = useRef("");
  const forgotPasswordEmail = useRef("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const navigate = useNavigate();

  const submitForgotPasswordReset = async () => {
    const reqBody = {
      email: forgotPasswordEmail.current.value,
    };
    console.log(reqBody.email);

    await SendForgotPasswordRequest(JSON.stringify(reqBody))
      .then((response) => {
        setShowForgotPasswordModal(false);
      })
      .catch((error) => {
        if (error.response) {
          setForgotPasswordMessage(error.response.data);
        }
      });
  };

  const submitLogin = async (event) => {
    event.preventDefault();
    const reqBody = {
      email: loginEmail.current.value,
      password: loginPassword.current.value,
    };

    console.log(reqBody);
    await SendLoginRequest(JSON.stringify(reqBody))
      .then((response) => {
        navigate("/main");
      })
      .catch((error) => {
        if (error.response) {
          setLoginMessage(error.response.data);
        }
      });
  };

  return (
    <Container style={{ height: "100vh" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <Col xs={6}>
          <Form>
            <Form.Label>Login</Form.Label>

            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="email" ref={loginEmail} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
              <Form.Control
                type="password"
                placeholder="password"
                ref={loginPassword}
              />
              <Form.Text className="text-danger">{loginMessage}</Form.Text>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                onClick={submitLogin}
                style={{ marginTop: "10px" }}
              >
                Submit
              </Button>
            </div>
          </Form>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              // type="submit"
              onClick={() => {
                setShowForgotPasswordModal(true);
              }}
              style={{ marginTop: "10px" }}
            >
              Forgot Password
            </Button>
          </div>
          {"Don't have account yet?   "}
          <Navbar.Brand href="/register" style={{ color: "blue" }}>
            Have it now
          </Navbar.Brand>
        </Col>
      </Row>
      <EmailProviderModal
        show={showForgotPasswordModal}
        onHide={() => {
          setForgotPasswordMessage("");
          setShowForgotPasswordModal(false);
        }}
        modal_title={"Forgot password ?"}
        response_message={forgotPasswordMessage}
        reference={forgotPasswordEmail}
        submit={submitForgotPasswordReset}
      ></EmailProviderModal>
    </Container>
  );
};

export default LoginPage;
