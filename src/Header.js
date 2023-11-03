import {
  Card,
  Button,
  Col,
  Form,
  FormControl,
  Container,
  Row,
} from "react-bootstrap";
export default function Header() {
  return (
    <Container>
      <Row style={{ backgroundColor: "red", padding: "10px 0px " }}>
        <Col>
          <h5>LOGO GROUP</h5>
        </Col>
        <Col>
          <Form inline>
            <Row>
              <Col>
                <FormControl
                  type="text"
                  placeholder="Search..."
                  className="mr-sm-2"
                />
              </Col>
              <Col>
                <Button variant="primary">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <Card.Link href={`/login`}>login</Card.Link>
        </Col>
      </Row>
    </Container>
  );
}
