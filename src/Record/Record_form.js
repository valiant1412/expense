import { Container, Row, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./Record_form.scss";
export function Record_form() {
  return (
    <Container>
      <Row className="header1">
        <h1>Bản ghi</h1>
      </Row>
      <Row>
        <Button
          className="Add-btn d-flex align-items-center justify-content-around"
          variant="primary"
        >
          <Icon.Plus fontSize={30} /> Thêm mới
        </Button>{" "}
      </Row>
    </Container>
  );
}
