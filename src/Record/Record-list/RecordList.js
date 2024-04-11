import {
  Container,
  Row,
  Col,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Form,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./RecordList.scss";
import { Link } from "react-router-dom";
import { RecordItem } from "../Record-item/RecordItem";
import { useState } from "react";
import { CategoryCreateForm } from "../../component/CategoryCreateForm/CategoryCreateForm";

export function RecordList() {
  const count: int = 0;
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState("04/04/2024");
  const [purpose, setPurpose] = useState("Ăn sáng");
  const [amount, setAmount] = useState("80");
  const [note, setNote] = useState("Hello, My name is Duke");
  const [isModified, setIsModified] = useState(false);
  const handleEdit = (value) => {
    setIsEditing(value);
  };
  const handleInputChange = () => {
    setIsModified(true);
  };
  const handleSave = () => {
    if (isModified) {
      const saveConfirm = window.confirm("Bạn muốn lưu thay đổi này ?");
      if (saveConfirm === true) {
        alert("Dữ liệu đã lưu thành công");
      }
    }
    setIsModified(false);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
    setIsModified(true);
  };

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
    setIsModified(true);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setIsModified(true);
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
    setIsModified(true);
  };

  return (
    <Container>
      <Row className="header1">
        <h1>Bản ghi</h1>
      </Row>

      <Row className="add-record-area">
        <Link className="navigate-to-add-record" to="/addrecord">
          <Button
            className="Add-btn d-flex align-items-center justify-content-around"
            variant="primary"
          >
            <Icon.Plus fontSize={30} /> Thêm mới
          </Button>{" "}
        </Link>
      </Row>
      <Row>
        <Col style={{ padding: 0 }} xs="7">
          <CategoryCreateForm roundCorner={true} />
        </Col>
        <Col xs="2"></Col>
        <Col xs="3">
          <Form.Control
            style={{ border: "1px solid black" }}
            size="sm"
            type="search"
            placeholder="Tìm kiếm bản ghi"
          />
        </Col>
      </Row>
      <Row>
        <Form className="board-list d-flex flex-row">
          <Col xs="10" className="d-flex flex-column align-items-center">
            <Row className="board-list-elements">
              <Row>
                <Col xs="11">
                  {isEditing ? (
                    <Form.Control
                      type="date"
                      style={{ border: "1px solid black" }}
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setIsModified(true);
                      }}
                    />
                  ) : (
                    <h2>{date}</h2>
                  )}
                </Col>
                <Col xs="1">
                  <RecordItem
                    parentCallBack={handleEdit}
                    isEditing={isEditing}
                  />
                </Col>
              </Row>

              <div className="record-item d-flex flex-column justify-content-center">
                <Row className="purpose-and-money">
                  <Col xs="7" style={{ borderRight: "1px dashed black" }}>
                    {isEditing ? (
                      <Form.Control
                        style={{ border: "1px solid black" }}
                        type="text"
                        value={purpose}
                        onChange={(e) => {
                          setPurpose(e.target.value);
                          setIsModified(true);
                        }}
                      />
                    ) : (
                      <h4>{purpose}</h4>
                    )}
                  </Col>
                  <Col xs="2"></Col>
                  <Col xs="3">
                    {isEditing ? (
                      <Form.Control
                        style={{ border: "1px solid black" }}
                        type="text"
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.target.value);
                          setIsModified(true);
                        }}
                      />
                    ) : (
                      <span>{amount}</span>
                    )}
                  </Col>
                </Row>
                <Row>
                  <p className="note-item">
                    {isEditing ? (
                      <Form.Control
                        style={{ border: "1px solid black" }}
                        type="text"
                        value={note}
                        onChange={(e) => {
                          setNote(e.target.value);
                          setIsModified(true);
                        }}
                      />
                    ) : (
                      <span>{note}</span>
                    )}
                  </p>
                </Row>
              </div>
            </Row>
          </Col>
          <Col xs="2">
            {isEditing && (
              <div className="save-and-cancel-btn d-flex justify-content-between">
                <Icon.FloppyFill
                  onClick={() => handleSave()}
                  color={isModified ? "#0d6efd" : ""}
                />
                <Icon.XCircle color="red" onClick={() => handleEdit(false)} />
              </div>
            )}
          </Col>
        </Form>
      </Row>
    </Container>
  );
}
