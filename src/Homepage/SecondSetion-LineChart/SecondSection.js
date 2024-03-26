import "./SecondSection.scss";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";
import { Monthly_line } from "./Monthly_Line/Monthly_line";
import { useState } from "react";
import { SpendingPieChart } from "./Spending_Pie/SpendingPieChart";
export function SecondSection(props) {
  const [time, setTime] = useState("Day");
  const handleClick = (isDay) => () => {
    setTime(isDay ? "Day" : "Night");
  };
  return (
    <Container className="homepage-section2">
      <Row className="line-horizon"></Row>
      <Row className="d-flex justify-content-between align-items-center">
        <Col xs="5">
          <h1>Bảng số liệu</h1>
        </Col>
        <Col xs="2"></Col>
        <Col xs="3">
          <DropdownButton id="dropdown-basic-button" title={time}>
            <Dropdown.Item onClick={handleClick(true)}>Day</Dropdown.Item>
            <Dropdown.Item onClick={handleClick(false)}>Night</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="statistic">
        <Monthly_line />
      </Row>
      <Row xs="12">
        <h1>Bảng nguyên nhân</h1>
      </Row>
      <Row>
        <Col xs="5">
          <SpendingPieChart />
        </Col>
        <Col xs="1"></Col>
        <Col xs="5">
          <SpendingPieChart />
        </Col>
      </Row>
    </Container>
  );
}
