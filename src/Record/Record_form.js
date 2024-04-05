import {
  Container,
  Row,
  Button,
  Col,
  ToggleButtonGroup,
  ToggleButton,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./Record_form.scss";
export function Record_form() {
  return (
    <Container>
      <Row className="header1">
        <h1>Bản ghi</h1>
      </Row>

      <Row className="add-record-area">
        <Button
          className="Add-btn d-flex align-items-center justify-content-around"
          variant="primary"
        >
          <Icon.Plus fontSize={30} /> Thêm mới
        </Button>{" "}
      </Row>
      <Row>
        <Form className="add-record-form d-flex flex-column justify-content-between">
          <Row>
            <ToggleButtonGroup
              className="category-btn-group"
              type="radio"
              name="options"
              defaultValue={1}
            >
              <ToggleButton
                className="category-createForm-btn"
                id="tbg-radio-1"
                value={1}
              >
                Thu
              </ToggleButton>
              <ToggleButton
                className="category-createForm-btn"
                id="tbg-radio-2"
                value={2}
              >
                Chi
              </ToggleButton>
              <ToggleButton
                className="category-createForm-btn"
                id="tbg-radio-3"
                value={3}
              >
                Nợ
              </ToggleButton>
            </ToggleButtonGroup>
          </Row>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Thời gian</Form.Label>
            <Form.Control type="datetime-local" placeholder="Enter email" />
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Mục đích</Form.Label>
              <Form.Control type="text" placeholder="Mục đích" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" sm={3}>
              <Form.Label>Số tiền</Form.Label>
              <Form.Control type="text" placeholder="Số tiền" />
            </Form.Group>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ghi chú</Form.Label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </Form.Group>
          <Row>
            <Button
              className="Add-btn save-btn
              d-flex
              align-items-center
              justify-content-around"
              variant="primary"
            >
              Lưu
            </Button>{" "}
            <Button className="Add-btn cancel-btn" variant="light">
              Trở về
            </Button>{" "}
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
