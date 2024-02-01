import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
function Thankyou() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <h1>Thankyou for Submitting</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Thankyou;
