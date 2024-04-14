import { Container, Row, Col } from "react-bootstrap";
import { CategoryCreateForm } from "../component/CategoryCreateForm/CategoryCreateForm";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./ReportPage.scss";
import { elements } from "chart.js";
export function ReportPage() {
  const elements = [];
  for (let i = 0; i < 2; i++) {
    elements.push(
      <Link className="month-board-list" to="/reportdetail">
        Tháng {i + 1}
      </Link>
    );
  }
  return (
    <Container>
      <Row className="header1">
        <h1>Báo cáo</h1>
      </Row>
      <Row>
        <Col style={{ padding: 0 }} xs="7">
          <CategoryCreateForm roundCorner={true} feature="report" />
        </Col>
        <Col xs="2"></Col>
        <Col xs="3"></Col>
      </Row>
      <Row className="board-list">{elements}</Row>
    </Container>
  );
}
