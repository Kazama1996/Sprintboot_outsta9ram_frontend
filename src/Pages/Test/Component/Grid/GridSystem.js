import { Container, Row, Col } from "react-bootstrap";

const GridSystem = () => {
  return (
    <Container>
      <Row>
        <Col xs={4}>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col xs={4}>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default GridSystem;
