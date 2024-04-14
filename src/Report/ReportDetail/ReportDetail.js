import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Goldmedal from "../../asset/Icon/gold_medal.png";
import Silver from "../../asset/Icon/silver_medal.png";
import { Monthly_line } from "../../Homepage/SecondSetion-LineChart/Monthly_Line/Monthly_line";
import { ScrollToTop } from "../../component/ScrollToTop/ScrollToTop";
import "./ReportDetail.scss";
export function ReportDetail() {
  return (
    <Container>
      <ScrollToTop />

      <Row className="header1">
        <h1>Báo cáo tháng 1</h1>
      </Row>
      <Row>
        <Col
          xs="5"
          className="d-flex justify-content-center align-items-center sum"
        >
          <div className="sum-money">Tổng tiền đã chi: 3000000</div>
        </Col>
        <Col xs="1"></Col>
        <Col
          xs="5"
          className="d-flex flex-column justify-content-center align-items-center sum"
        >
          <div className="d-flex flex-row  align-items-center">
            <Col xs="1"></Col>
            <Col xs="3">
              <img src={Goldmedal} alt="gold-medal" className="award" />
            </Col>
            <b>Ăn sáng</b>
          </div>
          <div className="d-flex flex-row  align-items-center">
            <Col xs="2"></Col>
            <Col xs="3">
              <img src={Silver} alt="gold-medal" className="award" />
            </Col>
            <b>Ăn sáng</b>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: "2rem" }}></Row>
      <Row>
        <h2>Thống kê nguyên nhân tháng</h2>
      </Row>
      <Row>
        <Row className="statistic">
          <Monthly_line />
        </Row>
      </Row>
      <Row>
        <h2>Thống kê chi tiêu ngày</h2>
      </Row>
      <Row>
        <Row className="statistic">
          <Monthly_line />
        </Row>
      </Row>
    </Container>
  );
}
