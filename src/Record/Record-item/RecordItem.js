import { Container, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState, useRef, useEffect } from "react";
import "./RecordItem.scss";
export function RecordItem({ parentCallBack, isEditing }) {
  const [showDropDownItem, setShowDropDownItem] = useState(false);
  const dropdownRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = (event): void => {
    if (event) {
      event.stopPropagation(); // Stop event propagation
      parentCallBack(true, event);
      setShowDropDownItem(false);
      setIsEdit(!isEdit);
    }
  };
  const handleBack = (event): void => {
    if (event) {
      event.stopPropagation();
      parentCallBack(false, event);
      setShowDropDownItem(false);
      setIsEdit(!isEdit);
    }
  };
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
      <Icon.ThreeDotsVertical
        className="dropbtn"
        onClick={() => handleClick()}
      />
      <div
        ref={dropdownRef}
        id="myDropdown"
        className={
          showDropDownItem ? "dropdown-content" : "dropdown-content hidden"
        }
      >
        {!isEditing ? (
          <div
            className="dropdown-item d-flex justify-content-between align-items-center"
            onClick={(event) => handleEdit(event)} // Pass the event object
          >
            <Col xs="1"></Col>
            <Col xs="3" className="d-flex justify-content-between">
              <Icon.PencilSquare color="#428914" />
            </Col>
            <Col xs="8">Chỉnh sửa</Col>
          </div>
        ) : (
          <div
            className="dropdown-item d-flex justify-content-between align-items-center"
            onClick={(event) => handleBack(event)} // Pass the event object
          >
            <Col xs="1"></Col>
            <Col xs="3" className="d-flex justify-content-between">
              <Icon.Arrow90degLeft />
            </Col>
            <Col xs="8">Trở về</Col>
          </div>
        )}

        <div className="dropdown-item d-flex justify-content-between align-items-center">
          <Col xs="1"></Col>
          <Col xs="3" className="d-flex justify-content-between">
            <Icon.TrashFill color="#F93636" />
          </Col>
          <Col xs="8" className="delete" onClick={() => handleAlert("all")}>
            Xóa
          </Col>
        </div>
      </div>
    </Container>
  );
}
