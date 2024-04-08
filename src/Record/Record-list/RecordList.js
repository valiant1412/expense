import {
  Container,
  Row,
  Col,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  FloatingLabel,
  Dropdown,
  Form,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./RecordList.scss";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
export function RecordList() {
  const handleAlert = (value) => {
    if (value === "all") {
      var result = window.confirm(
        "Tất cả bản ghi của bạn sẽ bị xóa, bạn có muốn tiếp tục ?"
      );
      if (result) {
        alert("Xóa thành công!");
      }
    } else {
      window.confirm("Bản ghi này sẽ bị xóa, bạn có muốn tiếp tục ?");
    }
  };
  const [showDropDownItem, setShowDropDownItem] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setShowDropDownItem((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropDownItem(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
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
          <ToggleButtonGroup
            className="category-btn-group"
            type="radio"
            name="options"
            defaultValue={1}
          >
            <ToggleButton
              className="category-createForm-btn category-btn-list"
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
              className="category-createForm-btn category-btn-list"
              id="tbg-radio-3"
              value={3}
            >
              Nợ
            </ToggleButton>
          </ToggleButtonGroup>
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
      <Row className="board-list d-flex flex-row ">
        <Col xs="11" className="d-flex flex-column align-items-center">
          <Row className="board-list-elements">
            <Row>
              <Col xs="11">
                <h2>04/04/2024</h2>
              </Col>
              <Col xs="1">
                <Icon.ThreeDotsVertical
                  className="dropbtn"
                  onClick={() => handleClick()}
                />
                <div
                  ref={dropdownRef}
                  id="myDropdown"
                  className={
                    showDropDownItem
                      ? "dropdown-content"
                      : "dropdown-content hidden"
                  }
                >
                  <div className="dropdown-item d-flex justify-content-between align-items-center">
                    <Col xs="1"></Col>
                    <Col xs="3" className="d-flex justify-content-between">
                      <Icon.PencilSquare color="#428914" />
                    </Col>
                    <Col xs="8">Chỉnh sửa</Col>
                  </div>
                  <div className="dropdown-item d-flex justify-content-between align-items-center">
                    <Col xs="1"></Col>
                    <Col xs="3" className="d-flex justify-content-between">
                      <Icon.TrashFill color="#F93636" />
                    </Col>
                    <Col
                      xs="8"
                      className="delete"
                      onClick={() => handleAlert("all")}
                    >
                      Xóa
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="record-item d-flex flex-column justify-content-center">
              <Row className="purpose-and-money">
                <Col xs="7" style={{ borderRight: "1px dashed black" }}>
                  <h4>Ăn sáng</h4>
                </Col>
                <Col xs="2"></Col>
                <Col xs="3">80</Col>
              </Row>
              <Row>
                <p className="note-item">Hello, my name is Duke</p>
              </Row>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
