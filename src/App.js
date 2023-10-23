import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <Container fluid>
    <BrowserRouter>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h2>Project FER</h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <Container fluid>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home/:id/detail" element={<Detail/>} />
            <Route path="/detail" element={<Detail/>} />
          </Routes>
          </Container>
        </Col>
      </Row>
    </BrowserRouter>
    </Container>
  );
}

export default App;
