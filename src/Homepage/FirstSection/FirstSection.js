import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../FirstSection/FirstSection.scss";
export function FirstSection() {
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateTime = new Date();
  const day: number = dateTime.getDate();
  const monthIndex: number = dateTime.getMonth();
  const month: string = monthNames[monthIndex];
  return (
    <Container>
      <Row>
        <marquee>Chào mừng bạn đã quay trở lại</marquee>
      </Row>
      <Row>
        <Col
          xs="5"
          className="d-flex justify-content-center align-items-center sum"
        >
          <div className="sum-money">Tổng số tiền: 100000</div>
        </Col>
        <Col xs="2"></Col>
        <Col xs="3" className="d-flex flex-column align-items-center real-time">
          <div className="d-flex flex-column align-items-center calendar-container">
            <div className="month">{month}</div>
            <div className="day">{day}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
