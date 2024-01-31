import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MultiStepForm from "./components/Form";
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          {/* <Col lg={{ span: 6, offset: 3 }}> */}
          <MultiStepForm />
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
